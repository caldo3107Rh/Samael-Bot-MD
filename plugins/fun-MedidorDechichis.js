let handler = async (m, { conn, command, text }) => {

let love = `*🍒 MEDIDOR DE CHICHIS 🍒*

*Las Chichis ${text} son copa* ${['A', 'B', 'C', 'D'].getRandom()}

*Que flotadores bro😳🥵*
`.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = ['love']

handler.tags = ['fun']

handler.command = /^(chichis)$/i

export default handler