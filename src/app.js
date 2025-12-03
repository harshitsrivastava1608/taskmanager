const express= require('express')
const logger=require('./utilities/logger')
const app=express()
app.use(express.json())
require('dotenv').config()

const {connectDB}=require('./config/sql.db') 
const connectTONoSQLDB=require('./config/nosql.db')

const authRoutes=require('./routes/auth.routes')
const taskRoutes=require('./routes/task.routes')

connectDB().then(()=>{
    logger.info('SQL DB connected from app.js')
})

connectTONoSQLDB().then(()=>{
    logger.info('NoSQL DB connected from app.js')
})


app.use('/auth',authRoutes)
app.use('',taskRoutes)
module.exports=app