const secteurcontroller = require('../controllers/secteurcontroller');
const router = require('express').Router();
router.post("/ajoutersecteur", secteurcontroller.ajoutersecteur)
router.get("/affichersecteur", secteurcontroller.getallsecteur)
router.get("/afficheronesecteur/:id", secteurcontroller.getbyId)
router.delete("/supprimersecteur/:id",secteurcontroller.deletesecteur)
router.put("/modifier/:id", secteurcontroller.update)
router.put("/pushsoussecteur/:id", secteurcontroller.pushsoussecteurinsecteur)





module.exports=router;