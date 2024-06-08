import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users/courses', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(response.data);
        
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    if (token) {
      fetchCourses();
    }

  }, [token]);

  return (
    <div>
      <h1>Available Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name} - {course.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;