/*---------------------------------------------------------------------------------------
  π β’ By https://github.com/ALBERTO9883
  π β’ βAlberto Y Ashlyβ
-----------------------------------------------------------------------------------------*/

import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[βππππβ] π»πΎπ π²πΎπΌπ°π½π³πΎπ +π·πΎ π΄πππ°π½ π³π΄ππ°π²ππΈππ°π³πΎπ π΄π½ π΄πππ΄ πΆπππΏπΎ, ππΈ π΄π π°π³πΌπΈπ½ π π³π΄ππ΄π° π°π²ππΈππ°ππ»πΎπ πππ΄ π΄π» π²πΎπΌπ°π½π³πΎ #enable modohorny*'
let fgif = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`*AΚΚα΄Κα΄α΄ Y AsΚΚΚβ₯οΈ*`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `επͺ¬ππ«ππ«π΅π-π©π―ππͺ¬ε`, 'jpegThumbnail': false }}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName[who]
let json = await fetch(`http://mkbot.online/api/tiktok/nsfw/nsfwtt?&apikey=${mkbotkey}`)
let jsons = await json.json()
let res = jsons.result
conn.sendButton(m.chat, `- π±πππππππππ π ππππππ πΆππππ₯΅ -`, `*ββ’@${who.split("@s.whatsapp.net")[0]}*`, res, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], fgif, { mentions: [who] })}
handler.command = /^(tiktokxxx)$/i
export default handler
global.mkbot = ['lwSUluWz', 'HSxJ72Rf', 'H6pvVPJc', 'uVAf54xz', 'nwJVzP6v']
global.mkbotkey = mkbot[Math.floor(mkbot.length * Math.random())]
