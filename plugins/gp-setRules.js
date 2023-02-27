//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sRules = text
    m.reply('✅ Se estableció el mensaje de rules')
  } else throw `✳️ Ingrese el mensaje\n@user (mención)`
}
handler.help = ['setrules <text>']
handler.tags = ['group']
handler.command = ['setrules'] 
handler.admin = true
handler.owner = false

export default handler
