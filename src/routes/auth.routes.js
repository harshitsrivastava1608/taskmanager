const express=require('express')
const AuthController=require('../controller/auth.controller')
const validate =require('../utilities/validate.middleware')
const {AuthSchema}=require('../utilities/validations.schema')

const router=express.Router()

router.post('/register',validate(AuthSchema),AuthController.registerUser)
router.post('/login',validate(AuthSchema),AuthController.loginUser)
router.get('/getUser',AuthController.getUserByEmail)

module.exports=router