import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*[โ๐๐๐๐โ] ๐ท๐ด๐! ๐๐ฐ ๐ด๐๐๐ฐ๐ ๐๐ด๐ถ๐ธ๐๐๐๐ฐ๐ณ๐พ*\n\n*๐๐๐ธ๐ด๐๐ด๐ ๐๐๐ธ๐๐ฐ๐ ๐๐ ๐๐ด๐ถ๐ธ๐๐๐๐พ? ๐๐๐ฐ ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ${usedPrefix}unreg <numero de serie>*\n\n*๐๐ธ ๐ฝ๐พ ๐๐ด๐ฒ๐๐ด๐๐ณ๐ฐ๐ ๐๐ ๐ฝ๐๐ผ๐ด๐๐พ ๐ณ๐ด ๐๐ด๐๐ธ๐ด ๐ฟ๐๐ด๐ณ๐ด๐ ๐๐๐ฐ๐ ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ ${usedPrefix}serie*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `โญโๅโโขโฉ๏ธโข๐๐๐๐๐๐๐๐๐๐๐โขโฉ๏ธโขโๅโโฎ
๐ฉๅ๐ช *๐ฝ๐พ๐ผ๐ฑ๐๐ด:* ${name}
๐ฉๅ๐ช *๐ด๐ณ๐ฐ๐ณ:* ${age} aรฑos
๐ฉๅ๐ช *๐ฝ๐๐ผ๐ด๐๐พ ๐ณ๐ด ๐๐ด๐๐ธ๐ด:* ${sn}
โฐโๅโโขโฉ๏ธโข๐๐๐๐๐๐๐๐๐๐๐โขโฉ๏ธโขโๅโโฏ`
let author = global.author
conn.sendButton(m.chat, caption, `ยก๐๐ ๐ฝ๐๐ผ๐ด๐๐พ ๐ณ๐ด ๐๐ด๐๐ธ๐ด ๐๐ด ๐๐ด๐๐๐ธ๐๐ฐ ๐ฟ๐พ๐ ๐๐ธ ๐ณ๐ด๐๐ด๐ฐ๐ ๐ฑ๐พ๐๐๐ฐ๐ ๐๐ ๐๐ด๐ถ๐ธ๐๐๐๐พ ๐ด๐ฝ ๐ด๐ป ๐ฑ๐พ๐!\n${author}`, [['ๅยกยก๐ฐ๐ท๐พ๐๐ฐ ๐๐พ๐ ๐๐ฝ ๐๐ด๐๐ธ๐ต๐ธ๐ฒ๐ฐ๐ณ๐พ/๐ฐ!!', '/profileๅ']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler
