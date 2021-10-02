const { Router }= require('express')//se trae la fincion router para separ las rutas de mi api

const rutas= Router()//una variable que personaliza mis rutas


//rutas del api
         
    rutas.get('/avanzada/v1/jugadores', function (req, res) {
    res.send('peticion tipo get (para buscar todos los jugadores)')
   })

    rutas.get('/avanzada/v1/jugadores/id', function (req, res) {
     res.send('peticion tipo get (para buscar un jugador)')
    })

    rutas.post('/avanzada/v1/jugadores', function (req, res) {
     res.send('peticion tipo post (para insertar)')
    })

   rutas.put('/avanzada/v1/jugadores/id', function (req, res) {
     res.send('peticion tipo put (para editar)')
   })

    rutas.delete('/avanzada/v1/jugadores/id', function (req, res) {
      res.send('peticion tipo delete (para eliminar)')
    })

    module.exports=rutas 