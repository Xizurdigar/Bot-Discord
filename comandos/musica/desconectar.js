const { escribirMensajeError } = require("../mensajeError");
const { enviarMensaje } = require("../mensajePersonalizado");

module.exports = {desconectar};

function desconectar(mensaje, conexion, canciones) {
    try{
        if(conexion[0]){
            conexion[0].destroy();
            enviarMensaje(mensaje, "Desconectar", "bien")
            canciones.splice(0);
        }else{
            enviarMensaje(mensaje, "No estoy en ningun canal de voz", "error")
        }
    }catch (error) {
        escribirMensajeError(mensaje);
    }
}