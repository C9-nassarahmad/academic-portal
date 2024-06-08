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
  await pool.query(query);
};

module.exports = {
  createUserTable
};
