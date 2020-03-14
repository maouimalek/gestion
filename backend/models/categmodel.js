const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const categschema = mongoose.model('categorie', new mongoose.Schema({
    nom:{
        type:String,
        required:true,
        trim:true,
    },
    souscategorie:[{
        type:Schema.Types.ObjectId,
        ref:'souscategorie'
    }],
    description:{
        type:String,
        required:true,
        trim:true,

    },
})

)
module.exports= categschema;