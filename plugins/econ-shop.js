//import db from '../lib/database.js'

const coinsperdiamond = 250
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].coins / coinsperdiamond) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].coins >= coinsperdiamond * count) {
    global.db.data.users[m.sender].coins -= coinsperdiamond * count
    global.db.data.users[m.sender].diamond += count
    conn.reply(m.chat, `
┌─「 *NOTA DE PAGO* 」
‣ *Compra nominal* : + ${count}💎 
‣ *Gastado* : -${coinsperdiamond * count} coins
└──────────────`, m)
  } else conn.reply(m.chat, `❎ Lo siento, no tienes suficientes *coins* para comprar *${count}* Diamantes💎\n\n Puedes conseguir *COINS* usando los comandos del *menú juegos y economía*`, m)
}
handler.help = ['buy', 'buyall']
handler.tags = ['econ']
handler.command = ['buy', 'buyall'] 

handler.disabled = false

export default handler
