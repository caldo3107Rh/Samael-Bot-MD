const xpperlimit = 350 
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].limit += count
    conn.reply(m.chat, `
╭═卐══• ⛩️•𝐍𝐎𝐓𝐀 𝐃𝐄 𝐏𝐀𝐆𝐎•⛩️ •══卐═╮
             𓆩卐𓆪 *Compra nominal* : + ${count}💎 
             𓆩卐𓆪 *Gastado* : -${xpperlimit * count} XP
╰═卐══• ⛩️•𝐍𝐎𝐓𝐀 𝐃𝐄 𝐏𝐀𝐆𝐎•⛩️ •══卐═╯`, m)
  } else conn.reply(m.chat, `卐❎ Lo siento, no tienes suficientes *XP* para comprar *${count}* Diamantes💎卐`, m)
}
handler.help = ['Buy', 'Buyall']
handler.tags = ['xp']
handler.command = ['buy', 'buyall'] 

handler.disabled = false

export default handler
