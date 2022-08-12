const items = [
    'limit', 'exp',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('卐卐estas haciendo una transferencia卐')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `卐🚩Uso del comamdo🚩卐 

*${usedPrefix + command}*  [tipo] [cantidad] [@user]

卐📌Ejemplo : ${usedPrefix + command} exp 65 @59172945992

╭═卐═•⛩️•𝐀𝐑𝐓 𝐓𝐑𝐀𝐍𝐒𝐅𝐄𝐑𝐈𝐁𝐋𝐄𝐒•⛩️•═卐═╮
𓆩卐𓆪 *limit* = diamante
𓆩卐𓆪 *exp* = experiencia
╰═卐═•⛩️•𝐀𝐑𝐓 𝐓𝐑𝐀𝐍𝐒𝐅𝐄𝐑𝐈𝐁𝐋𝐄𝐒•⛩️•═卐═╯`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('卐✳️ Taguea al usuario')
    if (!(who in global.db.data.users)) return m.reply(`卐✳️ Usuario ${who} no está en la  database`)
    if (user[type] * 1 < count) return m.reply(`卐✳️  *${type}*  insuficiente para transferir`)
    let confirm = `
¿Está seguro de que desea transferir *${count}* ${type} a  *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

Tienes  *60* s
`.trim()
    let c = 'FG - dylux-bot'
    conn.sendButton(m.chat, confirm, c, null, [['✔SI✔'], ['❌NO❌']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('卐Se acabó el tiempo卐'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('卐Cancelado卐')
    }
    if (/si?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`卐✅ transferencia exitosa de \n\n*${count}* *${type}*  a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}卐`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`卐Error al transferir *${count}* ${type} to *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}* 卐`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [cantidad] [@tag]')
handler.tags = ['xp']
handler.command = ['payxp', 'transfer', 'darxp'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
