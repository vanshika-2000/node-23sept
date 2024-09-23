const express = require('express');
const studentcontrollers = require('../controllers/studentcontrollers')
const router = express.Router();
router.use(express.urlencoded({ extended:false }))
router.get('/',(req,res)=>{
    res.render('home')
})
router.post('/add/student' , (req,res)=>{
    studentcontrollers.addStudent(req,res)
})

router.get('/students', (req,res)=>{
    studentcontrollers.getStudents(req,res)
})
module.exports = router