let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
╭═卐═• 🧿•𝐁𝐀𝐋𝐀𝐍𝐂𝐄•🧿 •═卐═╮
𓆩卐𓆪 𝙽𝚘𝚖𝚋𝚛𝚎: ${name}
𓆩卐𓆪 𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜: ${global.db.data.users[who].limit}💎

𝙽𝙾𝚃𝙰: 
𝙿𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 💎 𝚞𝚜𝚊𝚗𝚍𝚘 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜
𓆩卐𓆪 ${usedPrefix}buy <cantidad>
𓆩卐𓆪 ${usedPrefix}buyall
╰═卐═• 🧿•𝐁𝐀𝐋𝐀𝐍𝐂𝐄•🧿 •═卐═╯`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
