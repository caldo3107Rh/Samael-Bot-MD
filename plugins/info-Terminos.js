const { levelling } = '../lib/levelling.js'

import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {

let pp = './terminos.jpg'

try {

} catch (e) {

} finally {

//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''

let name = await conn.getName(m.sender)

let str = `
⁉ INFORMACION DEL BOT 💡 
      
 🖥 Estado del bot: Activo ✅ 
      
‼️Que es un bot‼️  Un bot de whatsapp es una inteligencia artificial con la cual podrás interactuar a través de comandos que puedes ver escribiendo #menu, estos comandos son capaces de realizar diversas tareas como descargar música, videos, crear stickers, descarga de imágenes etc. Recuerda que cada comando debe ser ejecutado con su prefijo # antes de escribirlo, ejemplo #aesthetic.
 Si intentas poner un comando ajeno al bot este simplemente no respondera, asi que revisa bien el menu de comandos disponibles
    
😶‍🌫PRIVACIDAD😶‍🌫
SAMAEL-BOT no comparte ni ve material recibido a ningún tipo de base de datos todo es eliminado constantemente.
      
 🥸Fallos o lentitud en respuesta🥸 Si bien el bot esta activo las 24 horas del dia puede que en determinado momento el bot deje de funcionar por unos minutos si pasa mas de 10 minutos ser pascientes, el bot volvera. También puede que varios comandos no funcionen debido a mala respuesta del servidor, si no funciona simplemente intenta en otro momento. 
      
🪬CREADOR🪬 Bot GRATUITO creado por RICARDO, programador novato.
Wa.me/584249061527
   
 卐⛩️Union a grupos o uso por chat privado⛩️卐 Se admite chat privado,se puede unir grupos (1 por usuario, y NOTA: Esto puede cambiar si el que este ejecutando este bot lo decide), sin embargo, al primer intento de robo o abuso del bot se baneará permanentemente y se tomaran cartas en el asunto.  
      
卐🤖Descarga del bot🤖卐 Bot con descarga totalmente gratuita, link del respositorio en Github donde estan todas las instrucciones como instalar en android y windows: https://github.com/caldo3107Rh/Samael-Bot

*🚩CUALQUIER INFRACCION A LOS TERMINOS ES BAN DEL BOT🚩*
`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'wa.me/584249061527', '卐⛩️𝐑𝐈𝐂𝚫𝐑𝐃𝚯⛩️卐', null, null, [

['⛩️𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻⛩️', '/menu']

], m)

}}

handler.help = ['menu3', 'help3', '?3', 'menuaudiosfuridamu']

handler.tags = ['main']

handler.command = /^(Terminos)$/i

handler.fail = null

export default  handler