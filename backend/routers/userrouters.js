const usercontroller = require('../controllers/usercontroller');


const router = require('express').Router();



router.post("/ajouteruser", usercontroller.ajouteruser)
router.get("/lister",usercontroller.getalluser)
router.get("/lister/:id",usercontroller.getbyId)
router.delete("/listeruser/:id",usercontroller.deleteuser)
router.put("/modifier/:id",usercontroller.update)
router.post("/authentification",usercontroller.authentificationuser)





module.exports=router;