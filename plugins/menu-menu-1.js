import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
*ミ⛩️𝙷𝙾𝙻𝙰 ${name}, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 卐🪬𝐒𝚫𝐌𝚫𝚵𝐋-𝚩𝚯𝐓🪬卐 ⛩️彡*

*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*

*🚩𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ 𝔻𝔼𝕃 𝔹𝕆𝕋🚩*

° 卐⛩️ _${usedPrefix}grupos_
° 卐⛩️ _${usedPrefix}estado_
° 卐⛩️ _${usedPrefix}infobot_
° 卐⛩️ _${usedPrefix}donar_
° 卐⛩️ _${usedPrefix}grouplist_
° 卐⛩️ _${usedPrefix}owner_
° 卐⛩️ _${usedPrefix}script_
° 卐⛩️ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

*🎮𝕁𝕌𝔼𝔾𝕆𝕊🎮*

°卐⛩️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
°卐⛩️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
°卐⛩️ _${usedPrefix}prostituto *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}prostituta *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}gay2 *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}lesbiana *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}pajero *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}pajera *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}zorra *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}puto *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}puta *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}manco *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}manca *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}rata *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}love *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}ganas *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}pervertid@ *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}chichis *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}doxear *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}pregunta *<texto>*_
°卐⛩️ _${usedPrefix}slot *<apuesta>*_
°卐⛩️ _${usedPrefix}ttt *<nombre sala>*_
°卐⛩️ _${usedPrefix}delttt_
°卐⛩️ _${usedPrefix}simi *<texto>*_
°卐⛩️ _${usedPrefix}top *<texto>*_
°卐⛩️ _${usedPrefix}topgays_
°卐⛩️ _${usedPrefix}topotakus_
°卐⛩️ _${usedPrefix}formarpareja_
°卐⛩️ _${usedPrefix}formaramigos_
°卐⛩️ _${usedPrefix}verdad_
°卐⛩️ _${usedPrefix}reto_
°卐⛩️ _${usedPrefix}cancion_
°卐⛩️ _${usedPrefix}pista_
°卐⛩️ _${usedPrefix}ganas *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}hombria *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}poto|culo *<nombre / @tag>*_
°卐⛩️ _${usedPrefix}altura *<nombre / @tag>*_

*🔓𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ🔐*

°卐⛩️ _${usedPrefix}enable *welcome*_
°卐⛩️ _${usedPrefix}disable *welcome*_
°卐⛩️ _${usedPrefix}enable *modohorny*_
°卐⛩️ _${usedPrefix}disable *modohorny*_
°卐⛩️ _${usedPrefix}enable *antilink*_
°卐⛩️ _${usedPrefix}disable *antilink*_
°卐⛩️ _${usedPrefix}enable *antilink2*_
°卐⛩️ _${usedPrefix}disable *antilink2*_
°卐⛩️ _${usedPrefix}enable *detect*_
°卐⛩️ _${usedPrefix}disable *detect*_
°卐⛩️ _${usedPrefix}enable *audios*_
°卐⛩️ _${usedPrefix}disable *audios*_
°卐⛩️ _${usedPrefix}enable *autosticker*_
°卐⛩️ _${usedPrefix}disable *autosticker*_
°卐⛩️ _${usedPrefix}enable *antiviewonce*_
°卐⛩️ _${usedPrefix}disable *antiviewonce*_

*⏬𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊⏬*

°卐⛩️ _${usedPrefix}facebook *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}instagram *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}mediafire *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}instagram *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}gitclone *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}stickerpack *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}gdrive *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}tiktok *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}xnxxdl *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}xvideosdl *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}ytmp3 *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}ytmp4 *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}play.1 *<texto / enlace / link / url>*_
°卐⛩️ _${usedPrefix}play.2 *<texto / enlace / link / url>*_
°卐⛩️ _${usedPrefix}play *<texto>*_
°卐⛩️ _${usedPrefix}playdoc *<texto>*_
°卐⛩️ _${usedPrefix}playlist *<texto>*_
°卐⛩️ _${usedPrefix}playlist2 *<texto>*_
°卐⛩️ _${usedPrefix}ringtone *<texto>*_
°卐⛩️ _${usedPrefix}soundcloud *<texto>*_
°卐⛩️ _${usedPrefix}imagen *<texto>*_
°卐⛩️ _${usedPrefix}pinteret *<texto>*_
°卐⛩️ _${usedPrefix}wallpaper *<texto>*_
°卐⛩️ _${usedPrefix}wallpaper2 *<texto>*_
°卐⛩️ _${usedPrefix}pptiktok *<nombre de usuario>*_
°卐⛩️ _${usedPrefix}igstalk *<nombre de usuario>*_
°卐⛩️ _${usedPrefix}igstory *<nombre de usuario>*_
°卐⛩️ _${usedPrefix}tiktokstalk *<nombre de usuario>*_

*🎎𝔾ℝ𝕌ℙ𝕆𝕊🎎* 

°卐⛩️ _${usedPrefix}add *<numero>*_
°卐⛩️ _${usedPrefix}kick *<@tag>*_
°卐⛩️ _${usedPrefix}grupo *<abrir / cerrar>*_
°卐⛩️ _${usedPrefix}promote *<@tag>*_
°卐⛩️ _${usedPrefix}demote *<@tag>*_
°卐⛩️ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
°卐⛩️ _${usedPrefix}demote *<@tag>*_
°卐⛩️ _${usedPrefix}infogroup_
°卐⛩️ _${usedPrefix}link_
°卐⛩️ _${usedPrefix}setname *<texto>*_
°卐⛩️ _${usedPrefix}setdesc *<texto>*_
°卐⛩️ _${usedPrefix}invocar *<texto>*_
°卐⛩️ _${usedPrefix}setwelcome *<texto>*_
°卐⛩️ _${usedPrefix}setbye *<texto>*_
°卐⛩️ _${usedPrefix}hidetag *<texto>*_
°卐⛩️ _${usedPrefix}Fantasmas_

*🔁ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊🔁*

°卐⛩️ _${usedPrefix}toimg *<responde a un sticker>*_
°卐⛩️ _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
°卐⛩️ _${usedPrefix}toptt *<responde a un video / audio>*_
°卐⛩️ _${usedPrefix}tovideo *<responde a un sticker>*_
°卐⛩️ _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
°卐⛩️ _${usedPrefix}tts es *<texto>*_

*🎈𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊🎈*

°卐⛩️️ _${usedPrefix}logos *<efecto> <texto>*_
°卐⛩️️ _${usedPrefix}logocorazon *<texto>*_
°卐⛩️️ _${usedPrefix}logochristmas *<texto>*_
°卐⛩️️ _${usedPrefix}simpcard *<@tag>*_
°卐⛩️️ _${usedPrefix}hornycard *<@tag>*_
°卐⛩️️ _${usedPrefix}lolice *<@tag>*_
°卐⛩️️ _${usedPrefix}ytcomment *<texto>*_
°卐⛩️️ _${usedPrefix}phmaker *<opcion><responder a imagen>*_
°卐⛩️️ _${usedPrefix}itssostupid_
°卐⛩️️ _${usedPrefix}pixelar_
°卐⛩️️ _${usedPrefix}blur_

*🧨ℝ𝔸ℕ𝔻𝕆𝕄🧨*

°卐⛩️ _${usedPrefix}cristianoronaldo_
°卐⛩️ _${usedPrefix}messi_
°卐⛩️ _${usedPrefix}meme_
°卐⛩️ _${usedPrefix}itzy_
°卐⛩️ _${usedPrefix}blackpink_
°卐⛩️ _${usedPrefix}kpop *<blackpink / exo / bts>*_
°卐⛩️ _${usedPrefix}lolivid_
°卐⛩️ _${usedPrefix}loli_
°卐⛩️ _${usedPrefix}navidad_
°卐⛩️ _${usedPrefix}ppcouple_
°卐⛩️ _${usedPrefix}wpmontaña_
°卐⛩️ _${usedPrefix}pubg_
°卐⛩️ _${usedPrefix}wpgaming_
°卐⛩️ _${usedPrefix}wpaesthetic_
°卐⛩️ _${usedPrefix}wpaesthetic2_
°卐⛩️ _${usedPrefix}wprandom_
°卐⛩️ _${usedPrefix}wallhp_
°卐⛩️ _${usedPrefix}wpvehiculo_
°卐⛩️ _${usedPrefix}wpmoto_
°卐⛩️ _${usedPrefix}coffee_
°卐⛩️ _${usedPrefix}pentol_
°卐⛩️ _${usedPrefix}caricatura_
°卐⛩️ _${usedPrefix}ciberespacio_
°卐⛩️ _${usedPrefix}technology_
°卐⛩️ _${usedPrefix}doraemon_
°卐⛩️ _${usedPrefix}hacker_
°卐⛩️ _${usedPrefix}planeta_
°卐⛩️ _${usedPrefix}randomprofile_
°卐⛩️ _${usedPrefix}neko_
°卐⛩️ _${usedPrefix}waifu_
°卐⛩️ _${usedPrefix}akira_
°卐⛩️ _${usedPrefix}akiyama_
°卐⛩️ _${usedPrefix}anna_
°卐⛩️ _${usedPrefix}asuna_
°卐⛩️ _${usedPrefix}ayuzawa_
°卐⛩️ _${usedPrefix}boruto_
°卐⛩️ _${usedPrefix}chiho_
°卐⛩️ _${usedPrefix}chitoge_
°卐⛩️ _${usedPrefix}deidara_
°卐⛩️ _${usedPrefix}erza_
°卐⛩️ _${usedPrefix}elaina_
°卐⛩️ _${usedPrefix}eba_
°卐⛩️ _${usedPrefix}emilia_
°卐⛩️ _${usedPrefix}hestia_
°卐⛩️ _${usedPrefix}hinata_
°卐⛩️ _${usedPrefix}inori_
°卐⛩️ _${usedPrefix}isuzu_
°卐⛩️ _${usedPrefix}itachi_
°卐⛩️ _${usedPrefix}itori_
°卐⛩️ _${usedPrefix}kaga_
°卐⛩️ _${usedPrefix}kagura_
°卐⛩️ _${usedPrefix}kaori_
°卐⛩️ _${usedPrefix}keneki_
°卐⛩️ _${usedPrefix}kotori_
°卐⛩️ _${usedPrefix}kurumi_
°卐⛩️ _${usedPrefix}madara_
°卐⛩️ _${usedPrefix}mikasa_
°卐⛩️ _${usedPrefix}miku_
°卐⛩️ _${usedPrefix}minato_
°卐⛩️ _${usedPrefix}naruto_
°卐⛩️ _${usedPrefix}nezuko_
°卐⛩️ _${usedPrefix}sagiri_
°卐⛩️ _${usedPrefix}sasuke_
°卐⛩️ _${usedPrefix}sakura_
°卐⛩️ _${usedPrefix}cosplay_

*❌ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠❌*

°卐🔞 _${usedPrefix}pack_
°卐🔞 _${usedPrefix}pack2_
°卐🔞 _${usedPrefix}pack3_
°卐🔞 _${usedPrefix}videoxxx_
°卐🔞 _${usedPrefix}tiktokxxx_
°卐🔞 _${usedPrefix}tetas_
°卐🔞 _${usedPrefix}booty_
°卐🔞 _${usedPrefix}ecchi_
°卐🔞 _${usedPrefix}furro_
°卐🔞 _${usedPrefix}imagenlesbians_
°卐🔞 _${usedPrefix}panties_
°卐🔞 _${usedPrefix}pene_
°卐🔞 _${usedPrefix}porno_
°卐🔞 _${usedPrefix}porno2_
°卐🔞 _${usedPrefix}randomxxx_
°卐🔞 _${usedPrefix}pechos_
°卐🔞 _${usedPrefix}yaoi_
°卐🔞 _${usedPrefix}yaoi2_
°卐🔞 _${usedPrefix}yuri_
°卐🔞 _${usedPrefix}yuri2_
°卐🔞 _${usedPrefix}trapito_
°卐🔞 _${usedPrefix}hentai_
°卐🔞 _${usedPrefix}nsfwloli_
°卐🔞 _${usedPrefix}nsfworgy_
°卐🔞 _${usedPrefix}nsfwfoot_
°卐🔞 _${usedPrefix}nsfwass_
°卐🔞 _${usedPrefix}nsfwbdsm_
°卐🔞 _${usedPrefix}nsfwcum_
°卐🔞 _${usedPrefix}nsfwero_
°卐🔞 _${usedPrefix}nsfwfemdom_
°卐🔞 _${usedPrefix}nsfwglass_

*🎤𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊🎤*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*

°卐⛩️ _${usedPrefix}bass_
°卐⛩️ _${usedPrefix}blown_
°卐⛩️ _${usedPrefix}deep_
°卐⛩️ _${usedPrefix}earrape_
°卐⛩️ _${usedPrefix}fast_
°卐⛩️ _${usedPrefix}fat_
°卐⛩️ _${usedPrefix}nightcore_
°卐⛩️ _${usedPrefix}reverse_
°卐⛩️ _${usedPrefix}robot_
°卐⛩️ _${usedPrefix}slow_
°卐⛩️ _${usedPrefix}smooth_
°卐⛩️ _${usedPrefix}tupai_

*🌐𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊🌐*

°卐⛩️ _${usedPrefix}stickersearch *<texto>*_
°卐⛩️ _${usedPrefix}xnxxsearch *<texto>*_
°卐⛩️ _${usedPrefix}animeinfo *<texto>*_
°卐⛩️ _${usedPrefix}google *<texto>*_
°卐⛩️ _${usedPrefix}letra *<texto>*_
°卐⛩️ _${usedPrefix}wikipedia *<texto>*_
°卐⛩️ _${usedPrefix}ytsearch *<texto>*_
°卐⛩️ _${usedPrefix}apkdone *<texto>*_
°卐⛩️ _${usedPrefix}apkgoogle *<texto>*_
°卐⛩️ _${usedPrefix}apkmody *<texto>*_
°卐⛩️ _${usedPrefix}apkshub *<texto>*_
°卐⛩️ _${usedPrefix}happymod *<texto>*_
°卐⛩️ _${usedPrefix}hostapk *<texto>*_
°卐⛩️ _${usedPrefix}revdl *<texto>*_
°卐⛩️ _${usedPrefix}toraccino *<texto>*_
°卐⛩️ _${usedPrefix}uapkpro *<texto>*_

*🍁𝔸𝕌𝔻𝕀𝕆𝕊🍁* 
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_

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
•卐🔊•° _Mamar|Amanecimos con ganas de?_
°•卐🔊•° _Timmy_
°•卐🔊•° _Recuerden amigos_
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
•卐🔊•° _lucy5_
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

*🎌ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊🎌*

°卐⛩️️ _${usedPrefix}afk *<motivo>*_
°卐⛩️️ _${usedPrefix}ocr *<responde a imagen>*_
°卐⛩️️ _${usedPrefix}acortar *<enlace / link / url>*_
°卐⛩️️ _${usedPrefix}calc *<operacion math>*_
°卐⛩️️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
°卐⛩️️ _${usedPrefix}whatmusic *<responde a un audio>*_
°卐⛩️️ _${usedPrefix}qrcode *<texto>*_
°卐⛩️️ _${usedPrefix}readmore *<texto1| texto2>*_
°卐⛩️️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
°卐⛩️️ _${usedPrefix}styletext *<texto>*_
°卐⛩️️ _${usedPrefix}traducir *<texto>*_

*🧿𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊🧿*

°卐⛩️ _${usedPrefix}sticker *<responder a imagen o video>*_
°卐⛩️ _${usedPrefix}sticker *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}s *<responder a imagen o video>*_
°卐⛩️ _${usedPrefix}s *<enlace / link / url>*_
°卐⛩️ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
°卐⛩️ _${usedPrefix}scircle *<responder a imagen>*_
°卐⛩️ _${usedPrefix}sremovebg *<responder a imagen>*_
°卐⛩️ _${usedPrefix}semoji *<tipo> <emoji>*_
°卐⛩️ _${usedPrefix}attp *<texto>*_
°卐⛩️ _${usedPrefix}attp2 *<texto>*_
°卐⛩️ _${usedPrefix}attp3 *<texto>*_
°卐⛩️ _${usedPrefix}ttp *<texto>*_
°卐⛩️ _${usedPrefix}ttp2 *<texto>*_
°卐⛩️ _${usedPrefix}ttp3 *<texto>*_
°卐⛩️ _${usedPrefix}ttp4 *<texto>*_
°卐⛩️ _${usedPrefix}ttp5 *<texto>*_
°卐⛩️ _${usedPrefix}pat *<@tag>*_
°卐⛩️ _${usedPrefix}slap *<@tag>*_
°卐⛩️ _${usedPrefix}kiss *<@tag>*_
°卐⛩️ _${usedPrefix}dado_
°卐⛩️ _${usedPrefix}wm *<packname> <author>*_
°卐⛩️ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
°卐⛩️ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_

*🤴🏻𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊🤴🏻*

°卐👑 _${usedPrefix}cajafuerte_
°卐👑 _${usedPrefix}enable *restrict*_
°卐👑 _${usedPrefix}disable *restrict*_
°卐👑 _${usedPrefix}enable *autoread*_
°卐👑 _${usedPrefix}disable *autoread*_
°卐👑 _${usedPrefix}enable *public*_
°卐👑 _${usedPrefix}disable *public*_
°卐👑 _${usedPrefix}enable *pconly*_
°卐👑 _${usedPrefix}disable *pconly*_
°卐👑 _${usedPrefix}enable *gconly*_
°卐👑 _${usedPrefix}disable *gconly*_
°卐👑 _${usedPrefix}msg *<texto>*_
°卐👑 _${usedPrefix}banchat_
°卐👑 _${usedPrefix}unbanchat_
°卐👑 _${usedPrefix}banuser *<@tag>*_
°卐👑 _${usedPrefix}unbanuser *<@tag>*_
°卐👑 _${usedPrefix}banuser *<@tag>*_
°卐👑 _${usedPrefix}bc *<texto>*_
°卐👑 _${usedPrefix}bcchats *<texto>*_
°卐👑 _${usedPrefix}bcgc *<texto>*_
°卐👑 _${usedPrefix}cleartpm_
°卐👑 _${usedPrefix}restart_
°卐👑 _${usedPrefix}update_
°卐👑 _${usedPrefix}addprem *<@tag>*_
°卐👑 _${usedPrefix}delprem *<@tag>*_
°卐👑 _${usedPrefix}listprem_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'wa.me/584249061527', '卐⛩️𝐑𝐈𝐂𝚫𝐑𝐃𝚯⛩️卐', 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '卐🪬𝐒𝚫𝐌𝚫𝚵𝐋-𝚩𝚯𝐓🪬卐', [
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],
['⛩️ 𝙾𝚆𝙽𝙴𝚁 ⛩️', '/owner'],
['🚩 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🚩', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
