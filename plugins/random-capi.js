let handler = async (m, { conn, text, command }) => {
    let yh = global.loli
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, `Que fresco mi pana el capibara🥤`.trim(), author, url, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
  }
  handler.command = /^(capibara|capi)$/i
  handler.tags = ['anime']
  handler.help = ['capibara']
  export default handler
  
  global.loli = [
    "https://imgur.com/3A8UDX5.jpg",
    "https://imgur.com/N1pwZnh.jpg",
    "https://imgur.com/0sMbiki.jpg",
    "https://imgur.com/X69v5mN.jpg",
    "https://imgur.com/MlNVT6t.jpg",
    "https://imgur.com/Ly6mZyX.jpg",
    "https://imgur.com/dQTbRC9.jpg",
  ]