const souscategcontroller = require('../controllers/souscategcontroller');
const router = require('express').Router();
router.post("/ajoutersouscategorie", souscategcontroller.ajoutersouscategorie)
router.get("/affichersouscategorie", souscategcontroller.getallsouscateg)
router.get("/affichersouscategorie/:id", souscategcontroller.getbyId)
router.delete("/supprimersouscategorie/:id",souscategcontroller.deletesouscateg)
router.put("/modifier/:id", souscategcontroller.update)
router.put("/push/:id", souscategcontroller.pushprodinsouscateg)






module.exports=router;