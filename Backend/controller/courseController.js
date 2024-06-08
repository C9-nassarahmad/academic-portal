const pool = require('../model/db');

const createCourse = async (req, res) => {
  const { name, description, start_date, end_date } = req.body;
  const teacher_id = req.user.id;
  if (!name || !description || !start_date || !end_date) {
    return res.status(400).json({ error: 'Invalid input data' });
  }
  try {
    const result = await pool.query(
      'INSERT INTO courses (name, description, start_date, end_date, teacher_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, description, start_date, end_date, teacher_id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Failed to create course' });
  }
};

const updateCourse = async (req, res) => {
  const { id, name, description, start_date, end_date } = req.body;

  try {
    const result = await pool.query(
      'UPDATE courses SET name = $1, description = $2, start_date = $3, end_date = $4 WHERE id = $5 RETURNING *',
      [name, description, start_date, end_date, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ error: 'Failed to update course' });
  }
};

const listCourses = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM courses');
    res.json(result.rows);
  } catch (error) {
    console.error('Error listing courses:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
};

module.exports = {
  createCourse,
  updateCourse,
  listCourses
};
