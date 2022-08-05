let handler = async (m, { conn, text, participants }) => {

	let member = participants.map(u => u.id)

	if(!text) {

		var sum = member.length

	} else {

		var sum = text

	}

	var total = 0

	var sider = []

	for(let i = 0; i < sum; i++) {

		let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}

		if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 

			if (typeof global.db.data.users[member[i]] !== 'undefined'){

				if(global.db.data.users[member[i]].whitelist == false){

					total++

					sider.push(member[i])

				}

			}else {

				total++

				sider.push(member[i])

			}

		}

	}

	if(total == 0) return conn.reply(m.chat, `*Este grupo no tiene fantasmas :D.*`, m) 

	m.reply(`*[❌️卐REVISIÓN DE INACTIVOS卐❌️]*\n\n*Grupo: ${await conn.getName(m.chat)}*\n*Participantes: ${sum}*\n\n*[ 卐👻 LISTA DE FANTASMAS 👻卐 ]*\n${sider.map(v => '卐🚫@' + v.replace(/@.+/, '')).join('\n')}\n\n*Nota: Esto puede no ser 100% acertado*`, null, { mentions: sider })

}

handler.help = ['verfantasmas']

handler.tags = ['group']

handler.command = /^(verfantasmas|fantasmas|sider|Sider)$/i

handler.admin = true

handler.botAdmin = true

handler.fail = null

export default handler