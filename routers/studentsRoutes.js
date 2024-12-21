const express = require("express");
const { getStudents, getStudentByID,createStudent } = require("../controllers/studentController");

//router object
const router = express.Router();

//routes

//GET all students list || GET
router.get("/getall", getStudents);

//GET student by id 
router.get('/get/:id',getStudentByID)

//create student || post
router.post('/create',createStudent)

module.exports = router;
