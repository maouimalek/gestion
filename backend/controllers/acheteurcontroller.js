const acheteurmodel=require('../models/acheteurmodel');//7atina 2point 5ater acheteurmodel ta7t dossier models
module.exports={
    ajouteracheteur: function(req,res){
        const acheteur = new acheteurmodel({
        nom: req.body.nom,       
        prenom: req.body.prenom,  
        email: req.body.email,
        password: req.body.password,
        numcin: req.body.numcin,
        numtel: req.body.numtel,

        });
acheteur.save(function(err){//save:sauvgarder dans la base de donnes
    if(err){
res.json({state:'no', msg:'vous avez un erreur'}
)
    }
else{ 
    res.json({state:'ok', msg:'acheteur ajouter'})
}



})
    },
getallacheteur:function(req,res) {
    acheteurmodel.find
    acheteurmodel.find({},function(err,data){
        if(err){
            res.json({state:'no', msg:'vous avez un erreur'})
        }
        else{
            res.json(data)
        }
    })
},
getbyId: function(req,res){
    acheteurmodel.find({_id:req.params.id},function(err,data){//params:path
        if(err){
            res.json({state:"no",msg:"vous avez un erreur"+err})
        }
        else{
            res.json(data)
        }
    })

},
deleteacheteur: function(req,res){
    
    acheteurmodel.deleteOne({_id:req.params.id},function(err,data){//juste bech nejbed le donnee
            if(err){
                res.json({state:"no",msg:"vous avez un erreur"})
            }
            else{
                res.json({state:"ok",msg:"acheteur supprimer"})
            }
        })   
    
},
update: function(req,res){
    acheteurmodel.updateOne({_id:req.params.id},{$set:req.body},//set ki n7eb nbedel continu wa7ed w be9i yab9a kima houwa//bech get w ba3ed nbedel
        {
           
            nom:req.body.nom,
            prenom:req.body.prenom,
            email:req.body.email,
            password:req.body.password,
            numcin:req.body.numcin,
            numtel:req.body.numtel,

        },
        function(err){
            if(err){
                res.json({state:"no",msg:"vous avez un erreur"})
            }
            else{
                res.json({state:"ok",msg:"acheteur modifier"})
            }
            

        }

    )}






    
}