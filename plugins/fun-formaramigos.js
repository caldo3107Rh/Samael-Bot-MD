let toM = a => '@' + a.split('@')[0]

function handler(m, { groupMetadata }) {

let ps = groupMetadata.participants.map(v => v.id)

let a = ps.getRandom()

let b

do b = ps.getRandom()

while (b === a)

m.reply(`*${toM(a)},🌹𝙳𝙴𝙱𝙴𝚁𝙸𝙰𝚂 𝙲𝙾𝙽𝙾𝙲𝙴𝚁 𝙰 ${toM(b)}, 𝙿𝙾𝙳𝚁𝙸𝙰𝙽 𝙻𝙻𝙴𝙶𝙰𝚁 𝙰 𝚂𝙴𝚁 𝙼𝙴𝙹𝙾𝚁𝙴𝚂 𝙰𝙼𝙸𝙶𝙾𝚂🌹*`, null, {

mentions: [a, b]

})}

handler.help = ['formaramigos']

handler.tags = ['main', 'fun']

handler.command = ['formaramigo','formaramigos']

handler.group = true

export default handler