const free = 5000
const prem = 20000

let handler = async (m, { isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `επ *Ya recogiste tu recompensa diariaε*\n\nεπ Vuelve en *${msToTime(time - new Date())}ε*`
  global.db.data.users[m.sender].exp += isPrems ? prem : free
  m.reply(`
βββββββ.π.ββββββββββββββββ
π©επͺ *RECOMPENSA DIARIA*
π©επͺ *Has recibido:*
π©επͺ *XP* : +${isPrems ? prem : free}
βββββββββββββββ.π.ββββββββ`)
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

