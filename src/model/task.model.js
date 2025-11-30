const e = require('express')
const mongoose=require('mongoose')
const taskSchema=new mongoose.Schema({
    userId:{
        type:String
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    dueDate:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:['Low','Medium','High'],
    },
    status:{
        type:String,
        enum:['Pending', 'In Progress', 'Completed'],
    }
},{timestamps:true})
module.exports=mongoose.model('Task',taskSchema)