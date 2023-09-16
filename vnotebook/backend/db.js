const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/vnotebook?tls=false&readPreference=primary&directConnection=true';
const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
}
module.exports = connectToMongo;