const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,'Please add a Name']
    },
    email:{
        type : String , 
        unique : true ,
        required  : [true ,'please enter an Email']
        },
    password:{
        type : String ,
        required   :[true,"Password is Required"]
    },
    date:{
        type : Date , 
        default :  Date.now
    }
  });
const User = mongoose.model('user', UserSchema);
User.createIndexes();
module.exports = User