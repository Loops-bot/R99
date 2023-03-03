
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["cris", "andre"])}.mp3`

conn.sendButton(m.chat, `Hola *${name}* soy ⍣Loops ᴮᴼᵀ࿐ \n`, fgig, null, [
      ['⦙☰ Menu', '/help'],
      ['⏍ Info', '/infobot'],
      ['⌬ Grupos', '/gpdylux']
    ], m)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(hola|holaa)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
