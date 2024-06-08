const pool = require('./db');

const createCourseTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS courses (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      description TEXT,
      start_date DATE,
      end_date DATE,
      teacher_id INTEGER REFERENCES users(id)
    )
  `;
  try {
    await pool.query(query);
    console.log('Courses table created or already exists.');
  } catch (error) {
    console.error('Error creating courses table:', error.message);
    throw error; // Rethrow the error to be caught by the caller or higher-level handler
  }
};

module.exports = {
  createCourseTable
};
