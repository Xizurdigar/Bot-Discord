module.exports={escribirAyuda};

const { MessageEmbed } = require('discord.js');
const { escribirMensajeError } = require('./mensajeError');

// FUNCION PARA ESCRBIR UN MENSAJE DE TODOS LOS COMANDOS DISPOIBLES DEL BOT
function escribirAyuda(mensaje) {
    try{
        let ayuda = new MessageEmbed()
        .setTitle("AYUDA")
        .setColor("#00ffc8")
        .setDescription("Estos son los comandos disponibles")
        
        // MÚSICA
        .addFields(
            { name: 'MUSICA',value: 'Comandos para la música' },
            { name: 'Añadir cancion', value: '!mp (URL/Titulo)', inline: true },
            { name: 'Saltar cancion', value: '!ms', inline: true },
            { name: 'Quitar cancion', value: '!mr (num)', inline: true },
            { name: 'Ver lista', value: '!mq', inline: true },
            { name: 'Mezclar lista', value: '!mm', inline: true },
            { name: 'Limpiar lista', value: '!ml', inline: true },
            { name: 'Parar música', value: '!mf', inline: true },
            { name: 'Reanudar música', value: '!mc', inline: true },
            { name: 'Desconectar bot', value: '!md', inline: true },

        )
        // ADMINSITRACIÓN
        .addFields(
            { name: 'ADMINISTRACIÓN',value: 'Comandos para la adminsitración' },
            { name: 'Añadir rol', value: '!ar add (ROL) (@usuario)', inline: true },
            { name: 'Quitar rol', value: '!ar rem (ROL) (@usuario)', inline: true },
            { name: 'Añadir canal', value: '!ac add txt/voz (Nombre)', inline: true },
            { name: 'Eliminar canal', value: '!ac rem (#Canal)', inline: true },
        )
        mensaje.reply({embeds: [ayuda]})
    }catch (error) {
        escribirMensajeError(mensaje);
    }
}