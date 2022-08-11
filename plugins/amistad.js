let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*卐🔰 Vamos a hacer algunas amistades 🔰*\n\n*Oye ${toM(a)} hablale al privado a ${toM(b)} para que jueguen y se haga una amistad 🙆*\n\n*Las mejores amistades empiezan con un juego 😉卐*`, null, {
mentions: [a, b],
})}
handler.command = ['amigo','amigorandom','amistad']
handler.group = true
export default handler