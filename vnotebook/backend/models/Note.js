const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    title:{
        type : String,
        required : [true,'Please add a Title']
    },
    description:{
        type : String ,
        required : [true ,'please enter description']
        },
    tag:{
        type : String ,
        default : "General"
    },
    date:{
        type : Date , 
        default :  Date.now
    }
  });

  module.exports = mongoose.model('notes', NotesSchema);