# academic-portal
# Academic Portal

This project is a basic academic portal with user authentication and course management functionalities. It is built using Node.js for the backend and React.js for the frontend.

## Features

- User Registration (Students and Teachers)
- User Login
- JWT-based Authentication
- Course Creation and Update by Teachers
- Course Listing for Students

## Technologies Used

- Backend: Node.js, Express.js, PostgreSQL
- Frontend: React.js
- Authentication: JWT (JSON Web Tokens)

## Prerequisites

- Node.js
- PostgreSQL
- An ElephantSQL account (or any PostgreSQL instance)

## Getting Started

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/C9-nassarahmad/academic-portal
   cd academic-portal


   npm start
   http://localhost:5000

   Frontend Setup
   Navigate to the frontend directory:
   cd academic-portal-frontend
   npm install
   npm run dev


  API Endpoints

  User Authentication

  Register: POST /api/register

  Request body: { "name": "string", "email": "string", "password": "string", "role": "student|teacher" }

  Login: POST /api/login

  Request body: { "email": "string", "password": "string" }

  Course Management

  Create Course: POST /api/courses

  Requires authentication (teacher only)

  Request body: { "name": "string", "description": "string", "start_date": "YYYY-MM-DD", "end_date": "YYYY-MM-DD" }

  Update Course: PUT /api/courses

  Requires authentication (teacher only)

  Request body: { "id": "number", "name": "string", "description": "string", "start_date": "YYYY-MM-DD", "end_date": "YYYY-MM-DD" }

  List Courses: GET /api/courses


  Usage

  Register a new user (student or teacher).

  Login to receive a JWT token.

  Teachers can create and update courses using the token for authentication.

  Students can view the list of available courses.
  Contributing

  Feel free to fork the project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

  License
  
  This should give you a fully functional academic portal with a clear project structure and comprehensive documentation. If you have any more specific requirements or need further customization, feel free to ask!



