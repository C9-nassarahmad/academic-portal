const pool = require('./db');

const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      password VARCHAR(100),
      role VARCHAR(50)
    )
  `;
  try {
    const result = await pool.query(query);
    console.log('Users table created or already exists.',result);
  } catch (error) {
    console.error('Error creating users table:', error.message);
    throw error; 
  }
};

module.exports = {
  createUserTable
};
