const adminmodel = require('../models/adminmodel');
const bcrypt=require('bcryptjs');//controller appeler lmodel
const jwt=require('jsonwebtoken');
module.exports={
    ajouteradmin: function (req,res){
        const admin = new adminmodel({
        NameA: req.body.NameA,       //role: req.body.role,//association
        LnameA: req.body.LnameA,     //body 5ater requete ne5dhou menha bady akahou
        Password: req.body.Password,
        Email: req.body.Email,
       

        });
admin.save(function(err){// save pour l'ajouter akahou
    if(err){// test de dase de donne
res.json({state:'no', msg:'vous avez un erreur'}
)
    }
else{ 
    res.json({state:'ok', msg:'utilisateur ajouter'})
}



})




    },
    getalladmin: function(req,res){//afficher liste de utilisateur
        adminmodel.find//find c'est une methode utilise pour chercher les donnees dans une collection
        adminmodel.find({},function(err,data){
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
        adminmodel.find({_id:req.params.id},function(err,data){//params:path
            if(err){
                res.json({state:"no",msg:"vous avez un erreur"})
            }
            else{
                res.json(data)
            }
        })

    },
    deleteadmin: function(req,res){
        adminmodel.deleteOne({_id:req.params.id},function(err,data){//juste bech nejbed le donnee
            if(err){
                res.json({state:"no",msg:"vous avez un erreur"})
            }
            else{
                res.json({state:"ok",msg:"utilisateur supprimer"})
            }
        })   
        
    },
    update: function(req,res){
        adminmodel.updateOne({_id:req.params.id},{$set:req.body},//set ki n7eb nbedel continu wa7ed w be9i yab9a kima houwa//bech get w ba3ed nbedel
            {
                NameA: req.body.NameA,       //role: req.body.role,//association
                LnameA: req.body.LnameA,     //body 5ater requete ne5dhou menha bady akahou
                Password: req.body.Password,
                Email: req.body.Email,
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
        authentificationadmin:function (req,res) {//recherche email et password fi base de donne
            console.log(req.body)
            adminmodel.findOne({Email:req.body.Email},function (err,data) {
                if(err){
                    console.log(err)
                }
                else{
                    console.log(data)
                    if(bcrypt.compare(req.body.Password,data.Password)){
                        const token=jwt.sign({id:data._id},req.app.get('secretkey'),{expiresIn:'7h'})
                        res.json({status:"success",msg:"admin found",data:{admin:data,token:token}})
                    }
                    else{
                        res.json({status:"error",msg:"invalid email or password",data:null})

                    }
                }
                
            })


            
        }

}