Tables and Relationships
Users Table

Columns:
id (Primary Key)
name (String)
email (String, Unique)
password (String)
role (Enum: 'student', 'teacher')
Courses Table

Columns:
id (Primary Key)
name (String)
description (Text)
start_date (Date)
end_date (Date)
teacher_id (Foreign Key, References users.id)
Relationships
Each Course is created by a Teacher (a User with role 'teacher').
Students (users with role 'student') can view the list of available courses.



Users
-----
id (PK)
name
email (Unique)
password
role (Enum: 'student', 'teacher')

Courses
-------
id (PK)
name
description
start_date
end_date
teacher_id (FK -> Users.id)

Relationships
-------------
Users (1) -> Courses (N) [teacher_id -> id]


+-----------+          +----------+
|   Users   |          |  Courses |
+-----------+          +----------+
| id (PK)   |<---------| id (PK)  |
| name      | 1     N  | name     |
| email     |          | description |
| password  |          | start_date |
| role      |          | end_date  |
+-----------+          | teacher_id (FK)|
                      +----------+
                      /////////////////
  CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM ('student', 'teacher') NOT NULL
);

CREATE TABLE Courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    teacher_id INTEGER REFERENCES Users(id) ON DELETE CASCADE
);


