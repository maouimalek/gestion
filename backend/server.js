const express=require("express")// cad import fi node js
 
const userrouters=require("./routers/userrouters");//liaison bin router w serveur
const acheteurrouter=require("./routers/acheteurrouteur");//7atina point akahou 5ater server.js lbara menech fi wost dossier
const vendeurrouter=require("./routers/vendeurrouter");
const produitrouter=require("./routers/produitrouteur");
const categrouter=require("./routers/categrouteur");
const souscategrouter=require("./routers/souscategrouteur");
const cors=require('cors');
const bodyparser=require('body-parser')
const db=require('./models/db');//appeler base fi server
const app = express();// app c'est medlware contient toute les foction et les methode qui offrer express
app.set('secretkey','test')//definie secretkey pour postman ya3refha
app.use(bodyparser.urlencoded({extended:false}));//utiliser bodyparser bech controller yefhem body mta3 requette (R http contient head,body)
app.use(bodyparser.json());
app.use(cors());
app.use("/user", userrouters)
app.use("/acheteur",acheteurrouter)//ki nzid table nsobha fi methode mta3 express 
app.use("/vendeur",vendeurrouter)   
app.use("/produit",produitrouter)   
app.use("/categorie",categrouter)
app.use("/souscategorie",souscategrouter)  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

app.listen(5500,function(){
    console.log('bonjour')//fonction return msg bonjour
})//listen methode express pour la creation d'un serveur(listen methode asynch)