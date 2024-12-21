require("dotenv").config();
const db = require("../config/db");
//get all students list
const getStudents = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM students");
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Data not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "All Students Records",
      totalStudents: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Student API",
      error: error.message,
    });
  }
};
//

//get student by id
const getStudentByID = async (req, res) => {
  try {
    const studentID = req.params.id;
    if (!studentID) {
      return res.status(400).send({
        success: false,
        message: "Please provide student ID",
      });
    }
    //get student by id
    const data = await db.query("SELECT * FROM students WHERE id = ?", [
      studentID,
    ]);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Records found",
      });
    }
    res.status(200).send({
      success: true,
      studentID: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get Student By ID API",
      error: error.message,
    });
  }
};

//  createStudent
const createStudent = async (req, res) => {
  try {
    const { name, roll_no, fees, medium } = req.body;
    if (!name || !roll_no || !fees || !medium) {
      return res.status(400).send({
        success: false,
        message: "Please provide all required fields",
      });
    }
    // create data
    const data = await db.query(
      "INSERT INTO students  (name, roll_no, fees, medium) VALUES (?,?,?,?)",
      [name, roll_no, fees, medium]
    );
    if (!data) {
      return res.status(400).send({
        success: false,
        message: "Error in INSERT Query",
      });
    }
    res.status(201).send({
      success: true,
      message: "Student Created Successfully",
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Student API",
      error: error.message,
    });
  }
};

//update student
const updateStudent = async (req, res) => {
  try {
    const studentID = req.params.id;
    if (!studentID) {
      return res.status(400).send({
        success: false,
        message: "Please provide student ID",
      });
    }
    const { name, roll_no, fees, medium } = req.body;
    const data = await db.query(
      "UPDATE students SET name=?,roll_no=?,fees=?,medium=? WHERE id=?",
      [name, roll_no, fees, medium, studentID]
    );
    if (!data) {
      return res.status(400).send({
        success: false,
        message: "Error in Update Query",
      });
    }
    res.status(200).send({
      success: true,
      message: "Student Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update Student API",
      error,
    });
  }
};

//delete student
const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(400).send({
        success: false,
        message: "Please provide student ID",
      });
    }
    await db.query("DELETE FROM students WHERE id=?", [studentId]);
    res.status(200).send({
      success: true,
      message: "Student Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Delete Student API",
      error: error.message,
    });
  }
};
module.exports = {
  getStudents,
  getStudentByID,
  createStudent,
  updateStudent,
  deleteStudent,
};
