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
*γβ©οΈ π·πΎπ»π° _${name}_ β©οΈε½‘*

*π©ππππ πππππππ©*
*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)*

Β°β’επβ’Β° _Quien es tu sempai botsito 7w7_
Β°β’επβ’Β° _Te diagnostico con gay_
Β°β’επβ’Β° _A nadie le importa_
Β°β’επβ’Β° _Fiesta del admin_
Β°β’επβ’Β° _Fiesta del administrador_ 
Β°β’επβ’Β° _Vivan los novios_
Β°β’επβ’Β° _Feliz cumpleaΓ±os_
Β°β’επβ’Β° _Noche de paz_
Β°β’επβ’Β° _Buenos dias_
Β°β’επβ’Β° _Buenos tardes_
Β°β’επβ’Β° _Buenos noches_
Β°β’επβ’Β° _Audio hentai_
Β°β’επβ’Β° _Chica lgante_
Β°β’επβ’Β° _Feliz navidad_
Β°β’επβ’Β° _Vete a la vrg_
Β°β’επβ’Β° _Pasa pack Bot_
Β°β’επβ’Β° _Atencion grupo_
Β°β’επβ’Β° _Marica quien_
Β°β’επβ’Β° _Murio el grupo_
Β°β’επβ’Β° _Oh me vengo_
Β°β’επβ’Β° _tio que rico_
Β°β’επβ’Β° _Viernes_
Β°β’επβ’Β° _Baneado_
Β°β’επβ’Β° _Sexo_
Β°β’επβ’Β° _Hola_
Β°β’επβ’Β° _Un pato_
Β°β’επβ’Β° _Nyanpasu_
Β°β’επβ’Β° _Te amo_
Β°β’επβ’Β° _Yamete_
Β°β’επβ’Β° _BaΓ±ate_
Β°β’επβ’Β° _Es puto_
Β°β’επβ’Β° _La biblia_
Β°β’επβ’Β° _Onichan_
Β°β’επβ’Β° _Mierda de Bot_
Β°β’επβ’Β° _Siuuu_
Β°β’επβ’Β° _Rawr_
Β°β’επβ’Β° _UwU_
Β°β’επβ’Β° _:c_
Β°β’επβ’Β° _a_
Β°β’επβ’Β° _Mamar o Amanecimos con ganas de?_
Β°β’επβ’Β° _Timmy_
Β°β’επβ’Β° _Recuerden amigos_
Β°β’επβ’Β° _Timmy_
Β°β’επβ’Β° _Cuca y rial_
Β°β’επβ’Β° _Deja de llorar_
Β°β’επβ’Β° _El diablo_
Β°β’επβ’Β° _Ese webo es mio_
Β°β’επβ’Β° _No digas mamadas_
Β°β’επβ’Β° _Me difaman_
Β°β’επβ’Β° _Por la costilla_
Β°β’επβ’Β° _Si caben|Morras_
Β°β’επβ’Β° _Llanero_
Β°β’επβ’Β° _Pou|Γ±o_
Β°β’επβ’Β° _Lucy1_
Β°β’επβ’Β° _Lucy2_
β’επβ’Β° _Lucy3_
β’επβ’Β° _Lucy4_
β’επβ’Β° _Lucy5_
β’επβ’Β° _Lucy6_
β’επβ’Β° _Lucy7_
β’επβ’Β° _Lucy8_
β’επβ’Β° _Lucy9_
β’επβ’Β° _Mika1_
β’επβ’Β° _Kya1_
β’επβ’Β° _Kya2_
β’επβ’Β° _Vas a llorar?_
β’επβ’Β° _Patria_
β’επβ’Β° _Mamawebazo|Mamawebaso_
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'wa.me/584249061527', 'εβ©οΈππππ«πππ―β©οΈε', null, null, [
['β©οΈπΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»β©οΈ', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
