let handler = async (m, { conn, text }) => {

 let who
 if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
 else who = false
 if (!text) throw `A quien quieres bloquear?`
 if (!who) throw 'Menciona al usuario que quieres que bloquee!'
 let user = `${who.split("@s.whatsapp.net")[0]}` + '@c.us'
    await conn.updateBlockStatus(user, 'block')
  conn.reply(m.chat, `卐✅Usuario bloqueado con exito卐`, m)
}
handler.help = ['block <@user>']
handler.tags = ['owner']
handler.command = /^block$/i
handler.owner = true

export default handler
