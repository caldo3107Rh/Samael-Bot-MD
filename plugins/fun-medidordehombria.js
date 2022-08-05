let handler = async (m, { conn, command, text }) => {
let love = `*🧔MEDIDOR DE HOMBRÍA🧔*

*La Hombría de ${text} es* *${Math.floor(Math.random() * 100)}%*

*Ese pecho peludo se nota a la distancia 😎.*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(hombria)$/i
export default handler