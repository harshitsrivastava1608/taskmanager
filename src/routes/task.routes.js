const express=require('express')
const TaskController=require('../controller/task.controller')
const validate =require('../utilities/validate.middleware')
const {TaskSchema}=require('../utilities/validations.schema')
const router=express.Router()

router.post('/tasks',validate(TaskSchema),TaskController.createTask)
router.get('/tasks',TaskController.getTask)
router.put('/tasks/:taskId',TaskController.updateTask)
router.delete('/tasks',TaskController.deleteTask)

module.exports=router