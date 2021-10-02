const express = require('express')  //importando expres para poderlo usar

//traer impoortar la funcion
const {conectarBD} = require('../database/conexion.js')

//traer las rutas

const rutas = require('../routes/rutas.js')

class ServidorModelo{

    constructor (){

        this.app = express()
        this.despertarBD()
        this.enrutarPeticiones()


    }

    encenderServidor(){

        this.app.listen(process.env.PUERTO,function(){
            console.log("servidor encendido..."+process.env.PUERTO)
        })

    }

    enrutarPeticiones(){

        this.app.use('/',rutas)

    
    }


    despertarBD(){

        conectarBD()

    }
}

module.exports = ServidorModelo