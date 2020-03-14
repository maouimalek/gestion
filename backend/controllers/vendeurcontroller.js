const vendeurmodel=require('../models/vendeurmodel');
const fs=require("fs");
const multer=require("multer");
const upload=multer({dest:__dirname+"/uploads/images"})
module.exports={
    ajoutervendeur:function(req,res){
        var file=__dirname+"/uploads/images"+req.file.originalname
        fs.readFile(req.file.path,function(err,data){//read bech ta9ra image 
            fs.writeFile(file,data,function(err){//write tsob image fi base 
                if(err)
                {
                    res.json({state:'no',msg:'vous avez un erreur'})
                } 
                else{
                    const vendeur = new vendeurmodel({
                        nom: req.body.nom,       
                        prenom: req.body.prenom,  
                        email: req.body.email,
                        password: req.body.password,
                        image:req.file.originalname,
                    });
                    vendeur.save(function(err){
                        if(err){
                            res.json({state:'no',msg:'vous avez un erreur'})
                        }
                        else{
                            res.json({state:'ok',msg:'vendeur ajouter'})
                        }
            
                    } )
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
    },
    getfile:function(req,res){
        res.sendFile(__dirname+"/uploads/images"+req.params.image)//send bech ya9ra image fi path requete w ba3ed yaffichi
    },//afficher image
    
    getallvendeurs:function(req,res){
        vendeurmodel.find
        vendeurmodel.find({},function(err,data){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json(data)
            }
        })
    },
    getbyId:function(req,res){
        vendeurmodel.find({_id:req.params.id}, function(err,data){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json(data)
            }
        })
    },
    deletevendeur:function(req,res){
        vendeurmodel.deleteOne({_id:req.params.id},function(err,data){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'vendeur supprimer'})
            }
        })
        
    },
    update:function(req,res){
        vendeurmodel.updateOne({_id:req.params.id},{$set:req.body},
            {
                nom:req.body.nom,
                prenom:req.body.prenom,
                password:req.body.password,
                email:req.body.email,
                image:req.file.originalname,
            },
            function(err){
                if(err){
                    res.json({state:'no',msg:'vous avez un erreur'})
                }
                else{
                    res.json({state:'ok',msg:'vendeur modifier'})
                }
            }
            ) }
}
