let handler = async (m, { conn }) => {
	
	await conn.fetchBlocklist().then(async data => {
		let txt = `*卐Lista de bloqueados卐*\n\n*🎌Total🎌 :* ${data.length}\n\n╭═卐═•⛩️•LISTA DE BLOCKS•⛩️•═卐═╮\n`
		for (let i of data) {
			txt += `𓆩卐𓆪  @${i.split("@")[0]}\n`
		}
		txt += "╰═卐═•⛩️•LISTA DE BLOCKS•⛩️•═卐═╯"
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw 'No hay números bloqueados'
	})
}

handler.help = ['blocklist']
handler.tags = ['main']
handler.command = ['blocklist', 'listblock'] 

export default handler