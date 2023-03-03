
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)

conn.reply(m.chat, `Hola *${name}* soy ⍣Loops ᴮᴼᵀ࿐`)
}

handler.customPrefix = /^(hola)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
