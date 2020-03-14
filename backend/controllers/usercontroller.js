const usermodel = require('../models/usermodel');
const bcrypt=require('bcryptjs');//controller appeler lmodel
const jwt=require('jsonwebtoken');
module.exports={
    ajouteruser: function (req,res){
        const user = new usermodel({
        nom: req.body.nom,       //role: req.body.role,//association
        prenom: req.body.prenom,     //body 5ater requete ne5dhou menha bady akahou
        email: req.body.email,
        password: req.body.password,
        });
user.save(function(err){// save pour l'ajouter akahou
    if(err){// test de dase de donne
res.json({state:'no', msg:'vous avez un erreur'}
)
    }
else{ 
    res.json({state:'ok', msg:'utilisateur ajouter'})
}



})




    },
    getalluser: function(req,res){//afficher liste de utilisateur
        usermodel.find//find c'est une methode utilise pour chercher les donnees dans une collection
        usermodel.find({},function(err,data){
            if(err){// test de base de donne
                res.json({state:'no', msg:'vous avez un erreur'}
                )
                    }
                else{ 
                    res.json(data)//data te5edhlek donnees eli fi base
                }
        })
    },
    getbyId: function(req,res){
        usermodel.find({_id:req.params.id},function(err,data){//params:path
            if(err){
                res.json({state:"no",msg:"vous avez un erreur"})
            }
            else{
                res.json(data)
            }
        })

    },
    deleteuser: function(req,res){
        usermodel.deleteOne({_id:req.params.id},function(err,data){//juste bech nejbed le donnee
            if(err){
                res.json({state:"no",msg:"vous avez un erreur"})
            }
            else{
                res.json({state:"ok",msg:"utilisateur supprimer"})
            }
        })   
        
    },
    update: function(req,res){
        usermodel.updateOne({_id:req.params.id},{$set:req.body},//set ki n7eb nbedel continu wa7ed w be9i yab9a kima houwa//bech get w ba3ed nbedel
            {
               
                nom:req.body.nom,
                prenom:req.body.prenom,
                email:req.body.email,
                password:req.body.password,

            },
            function(err){
                if(err){
                    res.json({state:"no",msg:"vous avez un erreur"})
                }
                else{
                    res.json({state:"ok",msg:"utilisateur modifier"})
                }
                

            }

        )},
        authentificationuser:function (req,res) {//recherche email et password fi base de donne
            usermodel.findOne({email:req.body.email},function (err,data) {
                if(err){
                    console.log(err)
                }
                else{
                    console.log(data)
                    if(bcrypt.compare(req.body.password,data.password)){
                        const token=jwt.sign({id:data._id},req.app.get('secretkey'),{expiresIn:'7h'})
                        res.json({status:"success",msg:"user found",data:{user:data,token:token}})
                    }
                    else{
                        res.json({status:"error",msg:"invalid email or password",data:null})

                    }
                }
                
            })


            
        }

}