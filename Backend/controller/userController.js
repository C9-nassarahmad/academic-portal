const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../model/db');

const register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    // Validate input
    if (!name || !email || !password || !role) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user in database
    const result = await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, hashedPassword, role]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) return res.status(400).json({ error: 'User not found' });
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid password' });
    const token = jwt.sign({ id: user.rows[0].id, role: user.rows[0].role }, process.env.SECRET_KEY);
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Failed to log in' });
  }
};

module.exports = {
  register,
  login
};
