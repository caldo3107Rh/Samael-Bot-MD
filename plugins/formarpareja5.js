let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
let c
do c = ps.getRandom()
while (b === a)
let d
do d = ps.getRandom()
while (b === a)
let e
do e = ps.getRandom()
while (b === a)
let f
do f = ps.getRandom()
while (b === a)
let g
do g = ps.getRandom()
while (b === a)
let h
do h = ps.getRandom()
while (b === a)
let i
do i = ps.getRandom()
while (b === a)
let j
do j = ps.getRandom()
while (b === a)
m.reply(`*_卐😍Las 5 mejores parejas del grupo😍卐_*
    
*_卐1.- ${toM(a)} y ${toM(b)}_*
- Esta pareja esta destinada a estar junta 💙
*_卐2.- ${toM(c)} y ${toM(d)}_*
- Esta pareja son dos pequeños tortolitos enamorados ✨
*_卐3.- ${toM(e)} y ${toM(f)}_*
- Ufff y que decir de esta pareja, ya hasta familia deberian tener 🤱🧑‍🍼
*_卐4.- ${toM(g)} y ${toM(h)}_*
- Estos ya se casaron en secreto 💍
*_卐5.- ${toM(i)} y ${toM(j)}_*
- Esta pareja se esta de luna de miel ✨🥵😍❤️`, null, {
mentions: [a, b, c, d, e, f, g, h, i, j],
})}
handler.help = ['formarpareja5']
handler.tags = ['main', 'fun']
handler.command = ['👫','formarpareja5']
handler.group = true
export default handler