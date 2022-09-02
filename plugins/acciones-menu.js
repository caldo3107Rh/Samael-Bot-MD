const { levelling } = '../lib/levelling.js'

import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {

let pp = './Menu2.jpg'

try {

} catch (e) {

} finally {

//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''

let name = await conn.getName(m.sender)

let str = `

*卐⛩️Menu de acciones⛩️卐*

𓆩卐𓆪 Abrazo
𓆩卐𓆪 Besar
𓆩卐𓆪 Coger
𓆩卐𓆪 Golpear
𓆩卐𓆪 Manosear
𓆩卐𓆪 Matar
𓆩卐𓆪 Agarron del nalgas
𓆩卐𓆪 Nalgada
𓆩卐𓆪 Mamada
𓆩卐𓆪 Venirse
𓆩卐𓆪 Patada en los webos
`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'wa.me/584249061527', '卐⛩️𝐑𝐈𝐂𝚫𝐑𝐃𝚯⛩️卐', null, null, [

['⛩️𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻⛩️', '/menu']

], m)

}}

handler.help = ['menu3', 'help3', '?3', 'menuaudiosfuridamu']

handler.tags = ['main']

handler.command = /^(acciones)$/i

handler.fail = null

export default  handler