let handler = async (m, { conn, command, text }) => {
let love = `*🥵 MEDIDOR DE GANAS 🥵*
*Las ganas de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle hacerlo en un motel🥵*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(ganas)$/i
export default handler