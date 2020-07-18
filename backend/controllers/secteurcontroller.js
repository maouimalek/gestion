const secteurmodel=require('../models/secteurmodel');
module.exports={
    ajoutersecteur:function(req,res){
        const secteur = new secteurmodel({
            NameS: req.body.NameS, 
              
        });
        secteur.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'secteur ajouter'})
            }

        } )
    },
    getallsecteur:function(req,res){
                secteurmodel.find
                secteurmodel.find({}).populate('secteur').exec(function(err,data){//populate pour afficher toute les attribut mta3 tab produit fi sous categorie
                    if(err){
                        res.json({state:'no',msg:'vous avez un erreur'})
                    }
                    else{
                        res.json(data)
                    }
                })
            },
    getbyId:function(req,res){
        secteurmodel.findOne({_id:req.params.id}, function(err,data){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json(data)
            }
        })
    },
    deletesecteur:function(req,res){
        secteurmodel.deleteOne({_id:req.params.id},function(err,data){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'secteur supprimer'})
            }
        })
        
    },
    update:function(req,res){
        secteurmodel.updateOne({_id:req.params.id},{$set:req.body},
            {
                NameS:req.body.NameS,
              
            },
            function(err){
                if(err){
                    res.json({state:'no',msg:'vous avez un erreur'})
                }
                else{
                    res.json({state:'ok',msg:'secteur modifier'})
                }
        } ) },
        pushsoussecteurinsecteur:function(req,res) {
            secteurmodel.updateOne({_id:req.params.id},{$push:{soussecteur:req.body.soussecteur}},
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
