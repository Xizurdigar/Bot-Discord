module.exports = {quitarRoles};

function quitarRoles(mensaje) {
    try {
        let comando = String(mensaje.content);
        let parametros = comando.split(" ");
        let rol = mensaje.guild.roles.cache.find(role => role.name === parametros[2]);
        if (rol) {
            let miembro = mensaje.mentions.members.first();
            if (miembro.roles.cache.has(rol.id)) {
                miembro.roles.remove(rol).catch(console.error);
                mensaje.reply({
                    content: "Rol eliminado correctamente"
                })
            }else{
                mensaje.reply({
                    content: "Este usuario no tiene este rol"
                })
            }
        }else{
            throw ("Error");
        }
    } catch (error) {
        mensaje.reply({
            content: "Comando introducido incorrectamente, para saber como usarlo correctamente escriba !help"
        })
    }
}