const categmodel=require('../models/categmodel');
module.exports={
    ajoutercategorie:function(req,res){
        const categorie = new categmodel({
            nom: req.body.nom, 
            souscategorie:req.body.souscategorie, 
            description:req.body.description,      
        });
        categorie.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'categorie ajouter'})
            }

        } )
    },
    getallcateg:function(req,res){
        
        categmodel.find({}).populate({path:"souscategorie",
        populate:{path:"produit"}//bech fi afficchage categorie yatla3 att sous categ w att produit
    }).exec(function(err,data){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json(data)
            }
        })
    },
    getbyId:function(req,res){
        categmodel.findOne({_id:req.params.id}, function(err,data){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json(data)
            }
        })
    },
    deletecateg:function(req,res){
        categmodel.deleteOne({_id:req.params.id},function(err,data){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'categorie supprimer'})
            }
        })
        
    },
    update:function(req,res){
        categmodel.updateOne({_id:req.params.id},{$set:req.body},
            {
                nom:req.body.nom,
              
            },
            function(err){
                if(err){
                    res.json({state:'no',msg:'vous avez un erreur'})
                }
                else{
                    res.json({state:'ok',msg:'categorie modifier'})
                }
        } ) },
        pushsouscategincateg:function(req,res) {
            categmodel.updateOne({_id:req.params.id},{$push:{souscategorie:req.body.souscategorie}},
                function(err,data) {
                    if(err){
                        res.json({state:'no',msg:'vous avez un err'})
                    }
                    else{
                        res.json(data)
                    }
                    
                } )
            
        }
}
