import fetch from 'node-fetch'
let handler = async (m, { conn, command, args }) => {
if (!args[0]) return conn.reply(m.chat, '*[π] πΈπ½πΆππ΄ππ΄ π»π° πππ» π³π΄ ππ½π° πΏπ°πΆπΈπ½π°*', m)
let ss = await (await fetch(`https://violetics.pw/api/media/ssweb?apikey=beta&url=${args[0]}`)).buffer()
conn.sendFile(m.chat, ss, 'error.png', args[0], m)}
handler.help = ['ss', 'ssf'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i
export default handler
