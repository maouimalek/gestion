const mongoose = require('mongoose');//mongoose intermediaire entre base de donnees et serveur node js
const bcrypt= require('bcryptjs');
const baseOption = {
    discriminatorKey:"usertype",//les discriminteurs sont un mecanisme d'heritage de schema(attribut)
    collection:"users",//te5edh vendeur w acheteur
    //un discriminateur est un fonction model et nous permettra de specifie
    //un cle comme usertype avec cette cle nous pouvons stocker diff entites
    //(vendeur.acheteur) nous collection
    //node herite seulement les attribut no methode
}
const Schema = mongoose.Schema;
const userschema = mongoose.model('user', new mongoose.Schema({// user esm table//definie les attribut de user
    nom:{
        type: String,
        required: true,
        trim: true,
    },
    prenom:{
        type: String,
        required: true,
        trim: true,

    },
    email:{
        type: String,
        required: true,
        trim: true,

    },

    password:{
        type: String,
        required: true,
        trim: true,

    }
},baseOption)
.pre("save", function(){
    this.password=bcrypt.hashSync(this.password,10)
})
)
module.exports=userschema;// bech nejem nedefinie les attribut bech controler ya3refhom (export collection lcontroller)
