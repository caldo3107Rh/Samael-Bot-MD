let handler = async (m, { conn, command, text }) => {

let love = `*๐ MEDIDOR DE POTOS ๐*

*El poto de ${text} * ${['No hay', 'Poquito', 'Tiene mas o menos', 'Se carga un tremendo culazo'].getRandom()}

*Que Culazo bro๐, serias mi culon/culona๐ณ?*

`.trim()

m.reply(love, null, { mentions: conn.parseMention(love) })}

handler.help = ['love']

handler.tags = ['fun']

handler.command = /^(poto|culo)$/i

export default handler
