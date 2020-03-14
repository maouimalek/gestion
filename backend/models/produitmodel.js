const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const produitschema = mongoose.model('produit', new mongoose.Schema({//creation un modelpour acheteur/creation du schemas pour l'acheteur
    nom:{
        type:String,
        required:true,
        trim:true,
    },
   
    prix:{
        type:Number,
        required:true,
        trim: true,

    },

    description:{
        type: String,
        required: true,
        trim: true,

    
    },
   
    image:{
        type: String,
        required:true,
        trim:true,
    
    }

})

)
module.exports= produitschema;