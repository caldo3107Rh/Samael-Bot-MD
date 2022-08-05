let handler = async (m, { conn, command, text }) => {

let love = `*🍑 MEDIDOR DE POTOS 🍑*

*El poto de ${text} es de* ${['No hay', 'Poquito', 'Tiene mas o menos', 'Se carga un tremendo culazo'].getRandom()}

*Que Culazo bro🍑, serias mi culon/culona😳?*

`.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = ['love']

handler.tags = ['fun']

handler.command = /^(poto|culo)$/i

export default handler