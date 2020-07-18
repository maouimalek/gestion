const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const secteurschema = mongoose.model('secteur', new mongoose.Schema({
    NameS:{
        type:String,
        required:true,
        trim:true,
    },
   
})

)
module.exports= secteurschema;