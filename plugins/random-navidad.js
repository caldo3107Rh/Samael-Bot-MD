import fetch from 'node-fetch'
import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Christmas")
let json = res.data
let mystic = json.url
conn.sendButton(m.chat, `_Navidad π§βπ_`, author, επͺ¬ππ«ππ«π΅π-π©π―ππͺ¬ε, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)
}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(navidad)$/i
export default handler
