const pool = require('../model/db');

const createCourse = async (req, res) => {
  const { name, description, start_date, end_date } = req.body;
  const teacher_id = req.user.id;
  const result = await pool.query(
    'INSERT INTO courses (name, description, start_date, end_date, teacher_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, description, start_date, end_date, teacher_id]
  );
  res.json(result.rows[0]);
};

const updateCourse = async (req, res) => {
  const { id, name, description, start_date, end_date } = req.body;
  const result = await pool.query(
    'UPDATE courses SET name = $1, description = $2, start_date = $3, end_date = $4 WHERE id = $5 RETURNING *',
    [name, description, start_date, end_date, id]
  );
  res.json(result.rows[0]);
};

const listCourses = async (req, res) => {
  const result = await pool.query('SELECT * FROM courses');
  res.json(result.rows);
};

module.exports = {
  createCourse,
  updateCourse,
  listCourses
};
