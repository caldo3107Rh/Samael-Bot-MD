let handler = async (m, { conn, command, text }) => {

let love = `*🥷🏻🐂 MEDIDOR DE INFIDELIDAD🐂🥷🏻*

*El nivel de infidelidad de ${text} es de* *${Math.floor(Math.random() * 100)}%* 

`.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = ['love']

handler.tags = ['fun']

handler.command = /^(infiel)$/i

export default handler