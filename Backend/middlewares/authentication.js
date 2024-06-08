

const jwt = require('jsonwebtoken');
const pool = require('../model/db');
const authenticateToken = (req, res, next) => {
const authHeader = req.header('Authorization');
if (!authHeader || !authHeader.startsWith('Bearer ')) {
  return res.sendStatus(401); // Unauthorized if no token or incorrect format
}

const token = authHeader.split(' ')[1];
if (!token) {
  return res.sendStatus(401); // Unauthorized if no token found
}

jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
  if (err) {
    console.error('JWT verification error:', err);
    return res.sendStatus(403); // Forbidden if token is invalid or expired
  }
  req.user = user; // Set the user object from the token payload to req.user
  next(); // Move on to the next middleware or route handler
});
};

module.exports = authenticateToken;
