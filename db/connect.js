require('dotenv').config();

const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.url);
        console.log("MongoDb connected");
    }
    catch(error){
        console.log("Error connecting to MongoDB");
        process.exit(1);
    }
}

module.exports=connectDB;