import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command, args }) => {
  let full = /f$/i.test(command)
  if (!text) throw `*🧿 Ingrese el link de una página para hacer una captura*\n\n*卐 Ejemplo:*\n卐 ${usedPrefix + command} https://github.com/caldo3107Rh/Samael-Bot-MD`
  conn.reply(m.chat, global.wait, m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  conn.sendFile(m.chat, ss, 'Error.png', '*卐🎌 Captura de la Pagina🎌卐*', m)
}

handler.help = ['captura']
handler.tags = ['tools']
handler.command = /^(ssweb|ss|cap|screenshot|captura)$/i

export default handler