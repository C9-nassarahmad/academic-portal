

const jwt = require('jsonwebtoken');
const pool = require('../model/db');
const authenticateToken = (req, res, next) => {
const authHeader = req.header('Authorization');
if (!authHeader || !authHeader.startsWith('Bearer ')) {
  return res.sendStatus(401); 
}

const token = authHeader.split(' ')[1];
if (!token) {
  return res.sendStatus(401); 
}

jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
  if (err) {
    console.error('JWT verification error:', err);
    return res.sendStatus(403); 
  }
  req.user = user; 
  next(); 
});
};

module.exports = authenticateToken;
