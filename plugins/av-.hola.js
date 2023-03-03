
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)

conn.reply(m.chat, `Hola @${who.split("@s.whatsapp.net")[0]} soy ⍣Loops ᴮᴼᵀ࿐ `, fkowner, { mentions: [who]})
}

handler.customPrefix = /^(hola)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
