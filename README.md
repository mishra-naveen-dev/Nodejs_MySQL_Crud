# MySQL Node.js CRUD App

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MySQL.

## Project Structure
.env 
.gitignore 
config/ db.js 
controllers/ studentController.js 
package.json 
routers/ studentsRoutes.js 
server.js

## Prerequisites

- Node.js
- MySQL

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd mysql_curd
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add your MySQL database credentials:
    ```env
    PORT=8000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password_here
    DB_NAME=student_db
    DB_SECRET=mysecretkey
    ```

2. Update the database configuration in `studentController.js` if necessary.

## Security

To ensure your `.env` file is not exposed, add it to your `.gitignore` file:

```gitignore
.env
```

This will prevent the `.env` file from being committed to your version control system.

## Running the Application

Start the server:
```sh
npm start
```

The server will run on http://localhost:8000.

API Endpoints
Students
Get all students

URL: /api/v1/student/getall
Method: GET
Description: Retrieves a list of all students.
Get student by ID

URL: /api/v1/student/get/:id
Method: GET
Description: Retrieves a student by their ID.
Create a new student

URL: /api/v1/student/create
Method: POST
Description: Creates a new student.
Body Parameters:
name (string): The name of the student.
roll_no (string): The roll number of the student.
fees (number): The fees of the student.
medium (string): The medium of instruction.
License
This project is licensed under the ISC License.


This `README.md` file provides an overview of the project, installation instructions, configuration details, and API endpoints.
This `README.md` file provides an overview of the project, installation instructions, configuration details, and API endpoints.
