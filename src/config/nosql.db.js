const mongoose = require("mongoose");
let connection=null;
async function connectDB() {
    try{
        let connection;
        console.log('connection',connection)
        console.log('process.env.MONGO_URI',process.env.MONGO_URI)
        if(!connection){
             connection = await mongoose.connect(`${process.env.MONGO_URI}`, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("Connected to NoSQL database successfully");
        }
       
    }catch(err){
        console.error("Error connecting to NoSQL database", err);
    }
}
module.exports=connectDB;