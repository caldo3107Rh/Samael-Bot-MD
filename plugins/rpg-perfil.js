import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://imgur.com/edqUmzm.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `╭═卐══• ⛩️•𝐏𝐄𝐑𝐅𝐈𝐋•⛩️ •══卐═╮
*𓆩卐𓆪𝙽𝙾𝙼𝙱𝚁𝙴:* ${username} ${registered ? '(' + name + ') ': ''}
*𓆩卐𓆪𝙽𝚄𝙼𝙴𝚁𝙾:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*𓆩卐𓆪𝙻𝙸𝙽𝙺:* wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
*𓆩卐𓆪𝙻𝙸𝙼𝙸𝚃𝙴:* ${limit} 𝚄𝚂𝙾𝚂
*𓆩卐𓆪𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾:* ${registered ? 'Si': 'No'}
*𓆩卐𓆪𝙿𝚁𝙴𝙼𝙸𝚄𝙼:* ${prem ? 'Si' : 'No'}
*𓆩卐𓆪𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴:* 
${sn}
╰═卐══• ⛩️•𝐏𝐄𝐑𝐅𝐈𝐋•⛩️ •══卐═╯`
conn.sendButton(m.chat, str, author, pp, [['⛩️𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻⛩️', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
