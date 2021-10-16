//EL controlador se encaragar de administrar
//las peticione y repuestas
const {request,response}=require('express')

//importar el servicio
const {insertarJugador}=require('../services/servicios.js')

//cuales son las operaciones
//que debe realizar mi SERVIDOR
async function registrarJugador(peticion=request,respuesta=response){

    //capturo los datos que llegan el cuerpo de la peticion
    let datosCliente=peticion.body;

    //intentar grabar los datos een bd usando el servicio
    try{

        await insertarJugador(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"exito registrando el jugador"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upsss... "+error
        })
        
    }

   
}

function buscarJugador(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando un jugador"
        }
    )

}

function buscarJugadores(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando todos los jugadores"
        }
    )

}

function editarJugador(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy editando un jugador"
        }
    )

}

function eliminarJugador(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy eliminando un jugador"
        }
    )

}


module.exports={

    registrarJugador,
    buscarJugador,
    buscarJugadores,
    editarJugador,
    eliminarJugador

}