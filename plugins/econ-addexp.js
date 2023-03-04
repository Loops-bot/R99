//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Taguea al usuario'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Ingrese la cantidad de *coins* que quiere añadir'
  if (isNaN(txt)) throw ' 🔢 sólo números'
  let expe = parseInt(txt)
  let exp = expe
  
  if (exp < 1) throw '✳️ Mínimo es  *1*'
  let users = global.db.data.users
  users[who].exp += expe

  await m.reply(`≡ *EXPERIENCIA AÑADIDO*
┌──────────────
▢  *Total:* ${expe}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Recibiste \n\n *+${expe} exp*`, who, m.text)
}

handler.help = ['addexp <@user>']
handler.tags = ['econ']
handler.command = ['addexp'] 
handler.rowner = true

export default handler
