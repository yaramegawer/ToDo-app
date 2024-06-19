const mongoose=require('mongoose');
const { type } = require('os');
const { boolean } = require('webidl-conversions');

const todoschema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default: false
    }
    
});

module.exports=mongoose.model("ToDo",todoschema);
