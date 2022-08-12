const free = 5000
const prem = 20000

let handler = async (m, { isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `卐🎁 *Ya recogiste tu recompensa diaria卐*\n\n卐🕚 Vuelve en *${msToTime(time - new Date())}卐*`
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`
╔══════.🎌.═══════════════╗
𓆩卐𓆪 *RECOMPENSA DIARIA*
𓆩卐𓆪 *Has recibido:*
𓆩卐𓆪 *XP* : +${isPrems ? prem : free}
╚══════════════.🎌.═══════╝`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['daily', 'claim'] 


export default handler



function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}

