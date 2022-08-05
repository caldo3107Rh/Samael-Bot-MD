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
*ミ⛩️ 𝙷𝙾𝙻𝙰 _${name}_ ⛩️彡*

*🚩𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒🚩*
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*

°•卐🔊•° _Quien es tu sempai botsito 7w7_
°•卐🔊•° _Te diagnostico con gay_
°•卐🔊•° _A nadie le importa_
°•卐🔊•° _Fiesta del admin_
°•卐🔊•° _Fiesta del administrador_ 
°•卐🔊•° _Vivan los novios_
°•卐🔊•° _Feliz cumpleaños_
°•卐🔊•° _Noche de paz_
°•卐🔊•° _Buenos dias_
°•卐🔊•° _Buenos tardes_
°•卐🔊•° _Buenos noches_
°•卐🔊•° _Audio hentai_
°•卐🔊•° _Chica lgante_
°•卐🔊•° _Feliz navidad_
°•卐🔊•° _Vete a la vrg_
°•卐🔊•° _Pasa pack Bot_
°•卐🔊•° _Atencion grupo_
°•卐🔊•° _Marica quien_
°•卐🔊•° _Murio el grupo_
°•卐🔊•° _Oh me vengo_
°•卐🔊•° _tio que rico_
°•卐🔊•° _Viernes_
°•卐🔊•° _Baneado_
°•卐🔊•° _Sexo_
°•卐🔊•° _Hola_
°•卐🔊•° _Un pato_
°•卐🔊•° _Nyanpasu_
°•卐🔊•° _Te amo_
°•卐🔊•° _Yamete_
°•卐🔊•° _Bañate_
°•卐🔊•° _Es puto_
°•卐🔊•° _La biblia_
°•卐🔊•° _Onichan_
°•卐🔊•° _Mierda de Bot_
°•卐🔊•° _Siuuu_
°•卐🔊•° _Rawr_
°•卐🔊•° _UwU_
°•卐🔊•° _:c_
°•卐🔊•° _a_
°•卐🔊•° _Mamar o Amanecimos con ganas de?_
°•卐🔊•° _Timmy_
°•卐🔊•° _Recuerden amigos_
°•卐🔊•° _Timmy_
°•卐🔊•° _Cuca y rial_
°•卐🔊•° _Deja de llorar_
°•卐🔊•° _El diablo_
°•卐🔊•° _Ese webo es mio_
°•卐🔊•° _No digas mamadas_
°•卐🔊•° _Me difaman_
°•卐🔊•° _Por la costilla_
°•卐🔊•° _Si caben|Morras_
°•卐🔊•° _Llanero_
°•卐🔊•° _Pou|ño_
°•卐🔊•° _Lucy1_
°•卐🔊•° _Lucy2_
•卐🔊•° _Lucy3_
•卐🔊•° _Lucy4_
•卐🔊•° _Lucy5_
•卐🔊•° _Lucy6_
•卐🔊•° _Lucy7_
•卐🔊•° _Lucy8_
•卐🔊•° _Lucy9_
•卐🔊•° _Mika1_
•卐🔊•° _Kya1_
•卐🔊•° _Kya2_
•卐🔊•° _Vas a llorar?_
•卐🔊•° _Patria_
•卐🔊•° _Mamawebazo|Mamawebaso_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'wa.me/584249061527', '卐⛩️𝐑𝐈𝐂𝚫𝐑𝐃𝚯⛩️卐', null, null, [
['⛩️𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻⛩️', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
