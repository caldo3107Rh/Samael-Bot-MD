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

*βΎοΈβ©οΈπΌπππ ππ ππππππ ππ π΅πππππππβ©οΈβ½οΈ*

α―ΎLucy1α―Ύ
α―ΎLucy2α―Ύ
α―ΎLucy3α―Ύ
α―ΎLucy4α―Ύ
α―ΎLucy5α―Ύ
α―ΎLucy6α―Ύ
α―ΎLucy7α―Ύ
α―ΎLucy8α―Ύ
α―ΎLucy9α―Ύ
α―ΎMika1α―Ύ
α―ΎKya1α―Ύ
α―ΎKya2α―Ύ

*π©ππ ππ ππππππ π ππππππ πππππ ππ ππ ππππ, πππππ πππππππ ππ ππππππ ππ πππππππ ππ ππππΜπ πππ π±πΎππ©*
`.trim()

conn.sendHydrated(m.chat, str, wm, pp, 'wa.me/584249061527', 'εβ©οΈππππ«πππ―β©οΈε', null, null, [

['β©οΈπΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»β©οΈ', '/menu']

], m)

}}

handler.help = ['menu3', 'help3', '?3', 'menuaudiosfuridamu']

handler.tags = ['main']

handler.command = /^(menu3|audios furidamu|furidamu)$/i

handler.fail = null

export default  handler