//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Taguea al usuario'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Ingrese la cantidad de *coins* que quiere añadir'
  if (isNaN(txt)) throw ' 🔢 sólo números'
  let coins = parseInt(txt)
  let exp = coins
  
  if (coins < 1) throw '✳️ Mínimo es  *1*'
  let users = global.db.data.users
  users[who].coins += exp

  await m.reply(`≡ *COINS AÑADIDO*
┌──────────────
▢  *Total:* ${coins}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Recibiste \n\n *+${coins} coins*`, who, m.text)
}

handler.help = ['addcoins <@user>']
handler.tags = ['econ']
handler.command = ['addcoins'] 
handler.rowner = true

export default handler
