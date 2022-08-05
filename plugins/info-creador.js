let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—●⛩️ 𝙴𝚕 𝙽𝚞́𝚖𝚎𝚛𝚘 𝙳𝚎 𝙼𝚒 𝙾𝚠𝚗𝚎𝚛 𝙴𝚜 wa.me/584249061527*
*—●⛩️ 𝙴𝚕 𝙽𝚞́𝚖𝚎𝚛𝚘 𝙳𝚎 𝙼𝚒 𝚂𝚞𝚋𝙾𝚠𝚗𝚎𝚛 𝙴𝚜 wa.me/584125335586*
*—●⛩️ 𝙴𝚕 𝙽𝚞́𝚖𝚎𝚛𝚘 𝙳𝚎𝚕 𝚑𝚎𝚛𝚖𝚊𝚗𝚘 𝚍𝚎 𝚖𝚒 𝚘𝚠𝚗𝚎𝚛 𝙴𝚜 wa.me/17874878878*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'mimetype': `application/${document}`,
'fileName': `「 卐🪬𝐒𝚫𝐌𝚫𝚵𝐋-𝚩𝚯𝐓🪬卐 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': '卐⛩️𝐑𝐈𝐂𝚫𝐑𝐃𝚯⛩️卐',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '⛩️𝙼𝙴𝙽𝚄⛩️'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '🤑𝙳𝙾𝙽𝙰𝚁🤑'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
