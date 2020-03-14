const categcontroller = require('../controllers/categcontroller');
const router = require('express').Router();
router.post("/ajoutercategorie", categcontroller.ajoutercategorie)
router.get("/affichercategorie", categcontroller.getallcateg)
router.get("/afficheronecategorie/:id", categcontroller.getbyId)
router.delete("/supprimercategorie/:id",categcontroller.deletecateg)
router.put("/modifier/:id", categcontroller.update)
router.put("/pushsouscateg/:id", categcontroller.pushsouscategincateg)





module.exports=router;