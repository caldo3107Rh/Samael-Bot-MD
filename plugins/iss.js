let handler = async (m, { conn, args }) => {
let text = args.slice(1).join(' ')
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/its-so-stupid', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
dog: text || '‎'
}), 'error.png', `╭══• ೋ•✧๑🧿๑✧•ೋ •══╮
𝐘𝐎𝐔 𝐀𝐑𝐄 𝐒𝐎 𝐄𝐒𝐓𝐔𝐏𝐈𝐃 𝐃𝐔𝐃𝐄
╰══• ೋ•✧๑🧿๑✧•ೋ •══╯`, m)
}  
handler.help = ['itssostupid', 'iss', 'stupid']
handler.tags = ['maker']
handler.command = /^(itssostupid|iss|stupid)$/i
export default handler