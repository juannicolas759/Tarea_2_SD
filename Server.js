var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
var carros = ['Mazda 6', 'Toyota Prado', 'Chevrolet Cruz', 'Mercedes-Benz G 63', 'Ferrari SF90']

app.set('port', 5000)

app.get('/', function(req, res){
    res.sendFile(__dirname+'/f.html')
})

app.post('/procesar', function(req, res){
    console.log(req.body)
    var i = req.body.posicion
    res.send('<h1>El vehiculo en la posicion </h1>'+i+'<h1>es: </h1>'+carros[i-1])
})

app.listen(app.get('port'), function(){
    console.log( 'Express se ha iniciado en http://localhost:' +
      app.get('port') + '; presione Ctrl-C para cerrar el servidor.' )
})