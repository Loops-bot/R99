//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Taguea al usuario'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Ingrese la cantidad de *coins* que quiere añadir'
  if (isNaN(txt)) throw ' 🔢 sólo números'
  let limit = parseInt(txt)
  let limit = limit
  
  if (limit < 1) throw '✳️ Mínimo es  *1*'
  let users = global.db.data.users
  users[who].limit += limit 

  await m.reply(`≡ *COINS AÑADIDO*
┌──────────────
▢  *Total:* ${limit}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Recibiste \n\n *+${limit} coins*`, who, m.text)
}

handler.help = ['addcoins <@user>']
handler.tags = ['econ']
handler.command = ['addcoins'] 
handler.rowner = true

export default handler
