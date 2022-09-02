import fs from 'fs';

let handler = async (m, {text, conn, args, usedPrefix, command }) => {

    function message(text) {
        conn.sendMessage(m.chat, { text: `${text}` }, {quoted: m})
    }
    
        try {
            if (! text) {
                message(`╭═卐══• ⛩️•PLUGINS•⛩️ •══卐═╮\n\n𓆩❌𓆪 Hey! Esta no es la manera correcta de usar *${usedPrefix}getcode*. La manera correcta de usarla es *${usedPrefix}getcode + <ruta del archivo>*! Ejemplo: *${usedPrefix}getcode /plugins/code-getcode.js*.\n\n╰═卐══• ⛩️•PLUGINS•⛩️ •══卐═╯`)
            } else {
                conn.sendFile(m.chat, `.${args[0]}`, null, { quoted: m })
                message(`╭═卐══• ⛩️•PLUGINS•⛩️ •══卐═╮\n\n𓆩✅𓆪 Aqui esta el archivo en la ruta ' *${args[0]}* '! Algun error? Reportalo abriendo una issue en GitHub!\n\n╰═卐══• ⛩️•PLUGINS•⛩️ •══卐═╯`)
            }
        } catch(error) {
            message(`╭═卐══• ⛩️•PLUGINS•⛩️ •══卐═╮\n\n𓆩❌𓆪 Ha ocurrido un error "${error}". Por favor, abra una issue en GitHub para reportar el error.\n\n╰═卐══• ⛩️•PLUGINS•⛩️ •══卐═╯`)
        }
}

handler.help = ['getcode + <ruta>']
handler.tags = ['tools']
handler.command = ['getcode']
export default handler