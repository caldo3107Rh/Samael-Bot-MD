import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Ingrese el nombre de un pokemon*\n\n- Ejemplo: ${usedPrefix + command} pikachu`
  let res = await fetch(
    API("https://some-random-api.ml", "/pokedex", { pokemon: text })
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  let caption = `\t\t\t\t*‧ 📟 Pokedex 📟 ‧*
*• Nombre:* ${json.name}
*• Id:* ${json.id}
*• Tipo:* ${json.type}
*• Especie:* ${json.species}
*• Abilidades:* ${json.abilities}
*• Altura:* ${json.height}
*• Peso:* ${json.weight}
*• Experiencia básica:* ${json.base_experience}
*• Género:* ${json.gender}
*• Grupos de huevos:* ${json.egg_groups}
\t\t\t*‧ 🌟 ESTADÍSTICAS 🌟 ‧*
*• Hp:* ${json.stats.hp}
*• Ataque:* ${json.stats.attack}
*• Defensa:* ${json.stats.defense}
*• Sp atk:* ${json.stats.sp_atk}
*• Sp def:* ${json.stats.sp_def}
*• Velocidad:* ${json.stats.speed}
*• Total:* ${json.stats.total}
\t\t\t\t*‧ 🍥 FAMILIA 🍥 ‧*
*Etapa de evolución:* ${json.family.evolutionStage}
*Línea de evolución:* ${json.family.evolutionLine}
*DESCRIPTION*
${json.description}
*• Generación:* ${json.generation}`
  if (!json.error)
    conn.sendFile(
      m.chat,
      json.sprites.animated,
      null,
      caption,
      m
    );
    //await m.reply(pokedex)
    //await conn.sendFile(m.chat, `${json.sprites.animated}`, 'pokedex.gif', pokedex, m)
    //await conn.sendFile(m.chat, json.sprites.animated, "pokemon.gif", pokedex, m);
    //await conn.sendFile(m.chat, `${json.sprites.animated}`, 'pokemon.gif', pokedex, m, 0, { mimetype: 'video/gif' })
    //await conn.sendFile(m.chat, `${json.sprites.animated}`, 'pokemon.gif', pokedex, m, 0, { mimetype: 'video/gif' })
  else throw json.error
}

handler.help = ['pokedex']
handler.tags = ['internet']
handler.command = /^(pokedex)$/i
