const admincontroller = require('../controllers/admincontroller');


const router = require('express').Router();



router.post("/ajouteradmin", admincontroller.ajouteradmin)
router.get("/lister",admincontroller.getalladmin)
router.get("/lister/:id",admincontroller.getbyId)
router.delete("/listeradmin/:id",admincontroller.deleteadmin)
router.put("/modifier/:id",admincontroller.update)
router.post("/authentification",admincontroller.authentificationadmin)





module.exports=router;