//import db from '../lib/database.js'
let handler = async (m, { conn, usedPrefix }) => {
    let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    
    m.reply(`
卐 *USUARIOS BANEADOS*

𓆩卐𓆪 Total : *${users.length}* 

${users ? '\n' + users.map(([jid], i) => `
${i + 1}. ${conn.getName(jid) == undefined ? 'Desconocido' : conn.getName(jid)}
𓆩卐𓆪 ${jid}
`.trim()).join('\n') : ''}
`.trim())
}
handler.help = ['listban']
handler.tags = ['owner']
handler.command = ['banlist'] 
handler.owner = true



export default handler