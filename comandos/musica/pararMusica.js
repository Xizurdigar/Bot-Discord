const { escribirMensajeError } = require("../mensajeError");
const { enviarMensaje } = require("../mensajePersonalizado");

module.exports = {pararMusica};

// FUNCION PARA PAUSAR LA REPRODUCCION DEL MÚSICA DEL BOT
function pararMusica(mensaje, player, conexion, canciones) {
    try{
        if(!conexion[0]){
            enviarMensaje(mensaje, "Debo estar en un canal de voz para parar la reproduccion de música", "error")
            return;
        }
        if(canciones.length == 0){
            enviarMensaje(mensaje, "No se esta reproduciendo ninguna cancion", "error")
            return;
        }
        if(player.state.status == "paused"){
            enviarMensaje(mensaje, "La reproduccion de música ya esta pausada", "error")
            return;
        }
        player.pause();
        enviarMensaje(mensaje, "Reproducción de música pausada", "bien")
    }catch (error) {
        escribirMensajeError(mensaje);
    }
}