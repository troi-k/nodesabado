//importo el modelo de datos
const JugadorModelo = require('../models/JugadorModelo.js')

//Servicio para agregar un documento a la bd
async function insertarJugador(datosJugador){

    let jugadorAInsertar=new JugadorModelo(datosJugador)

    return await jugadorAInsertar.save()

}

//servicio para buscar 1 documento de la bd
async function leerJugador(id){
    
    let jugador=await JugadorModelo.findById(id)
    return jugador
}

//servicio para buscar todos los documentos

async function leerJugadores(){

    let jugadores=await JugadorModelo.find()
    return jugadores
}

//servicio para edita 1 documento
async function modificarJugador(id,datos){

    return await JugadorModelo.findByIdAndUpdate(id,datos)

}

//servicio para eliminar un documento

async function borrarJugador(id){

    return await JugadorModelo.findByIdAndDelete(id)

}


module.exports={
    insertarJugador,leerJugador,leerJugadores,modificarJugador,borrarJugador
}
