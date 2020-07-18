const usercontroller = require('../controllers/usercontroller');
const router = require('express').Router();
const multer=require("multer")
const upload=multer({dest:__dirname+"/uploads/images"})
router.post("/ajouteruser",upload.single("Avatar"), usercontroller.ajouteruser)//single : da5el seul image
router.get("/afficheruser", usercontroller.getalluser)
router.get("/afficheruser/:id", usercontroller.getbyId)
router.delete("/supprimeruser/:id", usercontroller.deleteuser)
router.put("/modifier/:id", usercontroller.update)
router.post("/uploadimage",upload.single("Avatar"), usercontroller.uploadimage)
router.get("/getfile/:image", usercontroller.getfile)//fi 3odh id 7atina image fi path//men8ir single 5ater 3ndou image fi base just bech ya9raha


module.exports=router;