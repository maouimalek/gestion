const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userschema = mongoose.model('user', new mongoose.Schema({//creation un modelpour acheteur/creation du schemas pour l'acheteur
CompanyName:{
    type: String,
    required: true,
    trim: true,
},

Address:{
    type: String,
    required: true,
    trim: true,

},


Firstname:{
    type: String,
    required: true,
    trim: true,

},

Lastname:{
    type: String,
    required: true,
    trim: true,

},

Email:{
    type: String,
    required: true,
    trim: true,

},



Avatar:{
    type: Array,
    required: true,
    

},

})

)
module.exports= userschema;