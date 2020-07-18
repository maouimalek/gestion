// const souscategmodel=require('../models/souscategmodel');
// module.exports={
//     ajoutersouscategorie:function(req,res){
//         const souscategorie = new souscategmodel({
//             nom: req.body.nom,  
//             produit:req.body.produit,  //bech fi sous categorie naffichou tab produit   
//         });
//         souscategorie.save(function(err){
//             if(err){
//                 res.json({state:'no',msg:'vous avez un erreur'})
//             }
//             else{
//                 res.json({state:'ok',msg:'sous categorie ajouter'})
//             }

//         } )
//     },
//     getallsouscateg:function(req,res){
//         souscategmodel.find
//         souscategmodel.find({}).populate('produit').exec(function(err,data){//populate pour afficher toute les attribut mta3 tab produit fi sous categorie
//             if(err){
//                 res.json({state:'no',msg:'vous avez un erreur'})
//             }
//             else{
//                 res.json(data)
//             }
//         })
//     },
//     getbyId:function(req,res){
//         souscategmodel.findOne({_id:req.params.id}).populate('produit').exec(function(err,data){//association bin souscateg w produit
//             if(err){
//                 res.json({state:'no',msg:'vous avez un erreur'})
//             }
//             else{
//                 res.json(data)
//             }
//         })
//     },
//     deletesouscateg:function(req,res){
//         souscategmodel.deleteOne({_id:req.params.id},function(err,data){
//             if(err){
//                 res.json({state:'no',msg:'vous avez un erreur'})
//             }
//             else{
//                 res.json({state:'ok',msg:'sous categorie supprimer'})
//             }
//         })
        
//     },
//     update:function(req,res){
//         souscategmodel.updateOne({_id:req.params.id},{$set:req.body},
//             {
//                 nom:req.body.nom,
              
//             },
//             function(err){
//                 if(err){
//                     res.json({state:'no',msg:'vous avez un erreur'})
//                 }
//                 else{
//                     res.json({state:'ok',msg:'sous categorie modifier'})
//                 }
//         } ) },
//         pushprodinsouscateg:function(req,res){
//             souscategmodel.updateOne({_id:req.params.id},{$push:{produit:req.body.produit}},//push pour sous categorie naffichou feha ensemble de produit par id 
//                 function(err,data) {
//                     if(err){
//                         res.json({state:'no',msg:'vous avez un err'})
//                     }
//                     else{
//                         res.json(data)
//                     }
                    
                
            
            
//             })
//         }
// }
