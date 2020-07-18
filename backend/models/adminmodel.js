const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');

const Schema = mongoose.Schema;
const adminschema = mongoose.model('admin', new mongoose.Schema({
    NameA:{
        type: String,
        required: true,
        trim: true,
    },
    LnameA:{
        type: String,
        required: true,
        trim: true,

    },
    Email:{
        type: String,
        required: true,
        trim: true,

    },

    Password:{
        type: String,
        required: true,
        trim: true,

    },
    
  

})
.pre("save", function(){
    this.password=bcrypt.hashSync(this.password,10)
})
)
module.exports=adminschema;
