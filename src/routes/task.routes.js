const express=require('express')
const TaskController=require('../controller/task.controller')
const validate =require('../utilities/middlewares/validate.middleware')
const {TaskSchema}=require('../utilities/middlewares/validations.schema')
const { extractUser,verifyUser } = require('../utilities/middlewares/user.extractor')
const router=express.Router()

router.post('/tasks',validate(TaskSchema),extractUser,TaskController.createTask)
router.get('/tasks',extractUser,TaskController.getTask)
router.put('/tasks/:taskId',extractUser,verifyUser,TaskController.updateTask)
router.delete('/tasks/:taskId',extractUser,verifyUser,TaskController.deleteTask)

module.exports=router