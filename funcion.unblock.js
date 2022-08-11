et handler = async (m, { conn, text }) => {

 let who
 if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
 else who = false
 if (!text) throw `A quien quieres que desbloquee?`
 if (!who) throw 'Menciona al usuario que quieres que desbloquee!'
 let user = `${who.split("@s.whatsapp.net")[0]}` + '@c.us'
    await conn.updateBlockStatus(user, 'unblock')
  conn.reply(m.chat, `卐✅Usuario desbloqueado con exito卐`, m)
}
handler.help = ['unblock <@user>']
handler.tags = ['owner']
handler.command = /^unblock$/i
handler.owner = true

export default handler
