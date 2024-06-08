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
  await pool.query(query);
};

module.exports = {
  createCourseTable
};
