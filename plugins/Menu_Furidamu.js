const { levelling } = '../lib/levelling.js'

import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {

let pp = './Menu3.jpg'

try {

} catch (e) {

} finally {

//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''

let name = await conn.getName(m.sender)

let str = `

*☾︎⛩️𝙼𝚎𝚗𝚞 𝚍𝚎 𝚊𝚞𝚍𝚒𝚘𝚜 𝚍𝚎 𝙵𝚞𝚛𝚒𝚍𝚊𝚖𝚞⛩️☽︎*

᯾Lucy1᯾
᯾Lucy2᯾
᯾Lucy3᯾
᯾Lucy4᯾
᯾Lucy5᯾
᯾Lucy6᯾
᯾Lucy7᯾
᯾Lucy8᯾
᯾Lucy9᯾
᯾Mika1᯾
᯾Kya1᯾
᯾Kya2᯾

*🚩𝚂𝚒 𝚝𝚎 𝚊𝚗𝚒𝚖𝚊𝚜 𝚊 𝚚𝚞𝚎𝚛𝚎𝚛 𝚜𝚊𝚕𝚒𝚛 𝚎𝚗 𝚎𝚕 𝚖𝚎𝚗𝚞, 𝚖𝚊𝚗𝚍𝚊 𝚙𝚛𝚒𝚟𝚊𝚍𝚘 𝚊𝚕 𝚗𝚞𝚖𝚎𝚛𝚘 𝚍𝚎 𝚁𝚒𝚌𝚊𝚛𝚍𝚘 𝚎𝚕 𝚍𝚞𝚎𝚗̃𝚘 𝚍𝚎𝚕 𝙱𝙾𝚃🚩*
`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'wa.me/584249061527', '卐⛩️𝐑𝐈𝐂𝚫𝐑𝐃𝚯⛩️卐', null, null, [

['⛩️𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻⛩️', '/menu']

], m)

}}

handler.help = ['menu3', 'help3', '?3', 'menuaudiosfuridamu']

handler.tags = ['main']

handler.command = /^(menu3|audios furidamu|furidamu)$/i

handler.fail = null

export default  handler