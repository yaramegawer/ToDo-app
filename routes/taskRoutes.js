const express=require('express');
const router=express.Router();
const ejs=require('ejs');

const {createTask,deleteTask,updateTask}=require('../controllers/tasks');

router.post('/addtask',createTask);

router.delete('/delete/:id',deleteTask)

router.put('/:id',updateTask)




module.exports=router;