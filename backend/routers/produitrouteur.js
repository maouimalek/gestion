const produitcontroller = require('../controllers/produitcontroller');
const router = require('express').Router();
const multer=require("multer")
const upload=multer({dest:__dirname+"/uploads/images"})
router.post("/ajouterproduit",upload.single("image"), produitcontroller.ajouterproduit)//single : da5el seul image
router.get("/afficherproduit", produitcontroller.getallproduit)
router.get("/afficherproduit/:id", produitcontroller.getbyId)
router.delete("/supprimerproduit/:id", produitcontroller.deleteproduit)
router.put("/modifier/:id", produitcontroller.update)
router.post("/uploadimage",upload.single("image"), produitcontroller.uploadimage)
router.get("/getfile/:image", produitcontroller.getfile)//fi 3odh id 7atina image fi path//men8ir single 5ater 3ndou image fi base just bech ya9raha


module.exports=router;