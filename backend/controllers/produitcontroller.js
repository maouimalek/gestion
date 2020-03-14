const produitmodel = require('../models/produitmodel');
const fs=require("fs")
const multer=require("multer")
const upload=multer({dest:__dirname+"/uploads/images"})//win bech nsob limage upload/image(destination l'image)
module.exports={
  

    ajouterproduit: function (req,res){
        var file=__dirname+"/uploads/images/"+req.file.originalname//post man bech nedeha b file 
    fs.readFile(req.file.path,function(err,data){//fs.readfile bech  ta9ra image
        fs.writeFile(file,data,function(err){
        if(err)
        {
            res.json({state:'no',msg:'vous avez un erreur'})
        }
else {      const produit = new produitmodel({
    nom: req.body.nom,       //role: req.body.role,//association
    prix: req.body.prix,     //body 5ater requete ne5dhou menha bady akahou
    description: req.body.description,
    image: req.file.originalname,//image de type file donc nktbou heka mouch kima nom w prix....
    });
produit.save(function(err){// save pour l'ajouter akahou
if(err){// test de base de donne
res.json({state:'no', msg:'vous avez un erreur'}
)
}
else{ 
res.json({state:'ok', msg:'produit ajouter'})
}
    
})
}
        })

})




    },
    uploadimage:function(req,res){//taffichi image seulement men8ir attribut mta3 produit
        var file=__dirname+"/uploads/images/"+req.file.originalname
        fs.readFile(req.file.path,function(err,data){//fs.readfile bech  ta9ra image
            fs.writeFile(file,data,function(err){
            if(err)
            {
                var response={
                    message:'sorry file couldnt upload',
                    filename:req.file.originalname,
                }
            }
            else{
                res.json({state:'ok',msg:'ok '})
            }
    
            })
        })
    },//ajouter image
    getfile:function(req,res){
        res.sendFile(__dirname+"/uploads/images"+req.params.image)//send bech ya9ra image fi path requete w ba3ed yaffichi
    },//afficher image
    

    getallproduit: function(req,res){
        produitmodel.find//find c'est une methode utilise pour chercher les donnees dans une collection
        produitmodel.find({},function(err,data){
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
        produitmodel.findOne({_id:req.params.id},function(err,data){//params:path
            if(err){
                res.json({state:"no",msg:"vous avez un erreur"})
            }
            else{
                res.json(data)
            }
        })

    },
    deleteproduit: function(req,res){
        produitmodel.deleteOne({_id:req.params.id},function(err,data){//juste bech nejbed le donnee
            if(err){
                res.json({state:"no",msg:"vous avez un erreur"})
            }
            else{
                res.json({state:"ok",msg:"produit  supprimer"})
            }
        })   
        
    },
    update: function(req,res){
        produitmodel.updateOne({_id:req.params.id},{$set:req.body},//set ki n7eb nbedel continu wa7ed w be9i yab9a kima houwa//bech get w ba3ed nbedel
            {
               
                nom:req.body.nom,
                prix:req.body.prix,
                description:req.body.description,
                 image:req.file.originalname,

            },
            function(err){
                if(err){
                    res.json({state:"no",msg:"vous avez un erreur"})
                }
                else{
                    res.json({state:"ok",msg:"produit  modifier"})
                }
                

            }

        )}

}