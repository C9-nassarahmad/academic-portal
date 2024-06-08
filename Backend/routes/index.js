const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const courseController = require('../controller/courseController');
const authenticateToken = require('../middlewares/auth');

router.post('/register', userController.register);
router.post('/login', userController.login);

router.post('/courses', authenticateToken, courseController.createCourse);
router.put('/courses', authenticateToken, courseController.updateCourse);
router.get('/courses', courseController.listCourses);

module.exports = router;
