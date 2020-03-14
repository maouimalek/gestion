//on fait un appel orm
var mongoose=require('mongoose');//inclusion de mongoose
var mongoDB='mongodb://127.0.0.1/mydb';//schema(path) base de donnee mongodb
mongoose.connect(mongoDB,{ useUnifiedTopology: true,useNewUrlParser: true });//connecte lbase de donne
mongoose.promise=global.promise;//ne fonctionne pas avec un seul router:bd global(appliquer sur toute les path)
var DB=mongoose.connection;
DB.on('error', console.error.bind(console,'mongodb connection error'))
