
let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["cri", "and"])}.mp3`

conn.sendButton(m.chat, `Hola *${name}* \nMi creador no se encuentra en linea \n \nEscribele más tarde \n`, fgig, null, [
     ['Si', 'khajs'], ['No']
    ], m)

} 

handler.customPrefix = /^(bro|jorge|jorgito|perro)$/i
handler.command = new RegExp
handler.private = 

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
