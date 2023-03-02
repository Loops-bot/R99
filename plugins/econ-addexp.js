//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ Taguea al usuario'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ Ingrese la cantidad de *EXP* que quiere añadir'
  if (isNaN(txt)) throw ' 🔢 sólo números'
  let exp = parseInt(txt)
  let exp = exp
  
  if (exp < 1) throw '✳️ Mínimo es  *1*'
  let users = global.db.data.users
  users[who].limit += exp

  await m.reply(`≡ *EPX AÑADIDO*
┌──────────────
▢  *Total:* ${exp}
└──────────────`)
 conn.fakeReply(m.chat, `▢ Recibiste \n\n *+${exp} EXP*`, who, m.text)
}

handler.help = ['addexp <@user>']
handler.tags = ['econ']
handler.command = ['addexp'] 
handler.rowner = true

export default handler

