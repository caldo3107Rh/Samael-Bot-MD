import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Masukan Alamat IP yang akan dicek', m)
  let ip = await (await fetch(`http://ip-api.com/json/${text}`)).json()
  if (ip.status == 'fail') return m.reply('No se encontró la Ip!')
  let iptext = `\t\t\t\t*‧ 🖥️ Información IP 🖥️ ‧*
🔍 *Ip:* ${ip.query}
        *Latitud de ip:* ${ip.lat}
        *Longitud de ip:* ${ip.lon}
🌆 *País:* ${ip.country}
        *Código de país:* ${ip.countryCode}
🏡 *Región:* ${ip.region}
        *Nombre de región:* ${ip.regionName}
🏙️ *Ciudad:* ${ip.city}
📚 *Código postal:* ${ip.zip}
🕐 *Zona horaria:* ${ip.timezone}
🌐 *Proveedor de servicios de Internet:*
        ${ip.isp}
🕋 *Organización:* ${ip.org}`
await m.reply(iptext)
}

handler.help = ['ip']
handler.tags = ['tools']
handler.command = /^(ip)$/i

export default handler
