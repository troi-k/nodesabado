//el controlador se encargara de administrar las peticiones y respuestas

const {request,response}= require('express')

//cuales son las operaciones que debe realizar mi servidor

function registrarJugador(peticion=Request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy resgistrando un jugador"
        }
    )

}

function buscarJugador(peticion=Request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando un jugador"
        }
    )


}

function buscarJugadores(peticion=Request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando todos los jugadores"
        }
    )


}

function editarJugador(peticion=Request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy editando un jugador un jugador"
        }
    )


}

function eliminarJugador(peticion=Request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy eliminando un jugador"
        }
    )


}

module.exports={registrarJugador,buscarJugador,buscarJugadores,editarJugador,eliminarJugador}