let handler = async (m, { conn, command, text }) => {
let love = `*🍆 MEDIDOR DE TULA 🍆*

*La Tula de ${text} mide* *${Math.floor(Math.random() * 30)}cm*

*Deberias Convertirte en Actor porno🥵, las romperias todas*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(tula)$/i
export default handler