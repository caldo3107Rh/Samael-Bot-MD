let handler = async (m, { conn, command, text }) => {

let love = `*🛡️ MEDIDOR DE PROFUNFIDAD🛡️*

*A ${text} le mide* *${Math.floor(Math.random() * 30)}cm pero para adentro* 

*Deberias cerrar las piernas, tienes eso mas profundo que las marianas🫥*

`.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = ['love']

handler.tags = ['fun']

handler.command = /^(cuca|pussy|vagina)$/i

export default handler