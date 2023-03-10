//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	
const sections = [
   {
	title: `โก Lista de Opciones`,
	rows: [

	{title: "๐ฎ | Welcome", description: "๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐พ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐ป๐ฐ ๐ฑ๐ธ๐ด๐ฝ๐๐ด๐ฝ๐ธ๐ณ๐ฐ ๐ด๐ฝ ๐ด๐ป ๐ถ๐๐๐ฟ๐พ", rowId: `${usedPrefix + command} welcome`},
	{title: "๐ | Publico", description: "๐ด๐ป ๐ฑ๐พ๐ ๐๐ด ๐๐๐ด๐ป๐๐ด ๐ณ๐ด ๐๐๐พ ๐ฟ๐๐ฑ๐ป๐ธ๐ฒ๐พ ๐/๐พ ๐ฟ๐๐ธ๐๐ฐ๐ณ๐พ", rowId: `${usedPrefix + command} public`},
	{title: "๐ | Nsfw", description: "๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐พ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐ป๐พ๐ ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ๐ +๐ท๐พ", rowId: `${usedPrefix + command} nsfw`},
	{title: "๐งฌ | Antifakes", description: "๐ฐ๐ป ๐ด๐ฝ๐๐ธ๐ฐ๐ ๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด ๐๐ฝ ๐ฝ๐๐ผ๐ด๐๐พ ๐ฐ๐๐ฐ๐ฑ๐ด, ๐ด๐ป ๐ฑ๐พ๐ ๐ป๐พ ๐๐ฐ๐ฒ๐ฐ", rowId: `${usedPrefix + command} onlylatinos`},
	{title: "๐ | Antilink", description: "๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐พ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐ด๐ป ๐ฐ๐ฝ๐๐ธ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด๐ ๐ณ๐ด ๐ถ๐๐๐ฟ๐พ๐ ๐ณ๐ด ๐๐ท๐ฐ๐๐๐ฐ๐ฟ๐ฟ ", rowId: `${usedPrefix + command} antilink`},
        {title: "๐ | Antilink 2", description: "๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐พ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐ด๐ป ๐ฐ๐ฝ๐๐ธ ๐ด๐ฝ๐ป๐ฐ๐ฒ๐ด๐ ๐๐๐ด ๐ธ๐ฝ๐ธ๐ฒ๐ธ๐ฐ๐ฝ ๐ด๐ฝ ๐ท๐๐๐ฟ๐", rowId: `${usedPrefix + command} antilink2`},
    {title: "๐ซ | Antidelete", description: "Active o Desactive para que el bot reenvie los mensajes eliminados", rowId: `${usedPrefix + command} antidelete`},
	{title: "โ๏ธ | Autolevelup", description: "Active o Desactive para que el bot envรญe mensajes,stickers y audios automรกticamente", rowId: `${usedPrefix + command} autolevelup`},
	{title: "๐ฃ๏ธ | ChatBot", description: "", rowId: `${usedPrefix + command} chatbot`},
	{title: "๐ | Detect", description: "๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐พ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐ป๐ฐ๐ ๐ฝ๐พ๐๐ธ๐ต๐ธ๐ฒ๐ฐ๐ฒ๐ธ๐พ๐ฝ๐ด๐ ๐ณ๐ด ๐ฝ๐๐ด๐๐ฐ ๐ผ๐พ๐ณ๐ธ๐ต๐ธ๐ฒ๐ฐ๐ฒ๐ธ๐พ๐ฝ ๐ด๐ฝ ๐๐ฝ ๐ถ๐๐๐ฟ๐พ ", rowId: `${usedPrefix + command} detect`},
	{title: "๐ | Document", description: "", rowId: `${usedPrefix + command} document`},
	{title: "๐ก๏ธ | Restrict", description: "๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐พ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ ๐ป๐ฐ๐ ๐๐ด๐๐๐๐ธ๐ฒ๐ฒ๐ธ๐พ๐ฝ๐ด๐ ๐ฟ๐ฐ๐๐ฐ ๐๐ฐ๐ฒ๐ฐ๐ ๐ถ๐ด๐ฝ๐๐ด ๐ณ๐ด ๐ถ๐๐๐ฟ๐พ๐", rowId: `${usedPrefix + command} restrict`},
	{title: "๐ฌ | SoloPrivado", description: "๐ด๐ป ๐ฑ๐พ๐ ๐๐พ๐ป๐พ ๐๐ด๐๐ฟ๐พ๐ฝ๐ณ๐ด๐๐ฐ ๐ฐ ๐ป๐พ๐ ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ๐ ๐๐ธ ๐ด๐ ๐๐ฝ ๐ฒ๐ท๐ฐ๐ ๐ฟ๐๐ธ๐๐ฐ๐ณ๐พ", rowId: `${usedPrefix + command} onlydm`},
        {title: "๐ฅ | SoloGrupos", description: "๐ด๐ป ๐ฑ๐พ๐ ๐๐พ๐ป๐พ ๐๐ด๐๐ฟ๐พ๐ฝ๐ณ๐ด๐๐ฐ ๐ฐ ๐ป๐พ๐ ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ๐ ๐๐ธ ๐ด๐ ๐๐ฝ ๐ถ๐๐๐ฟ๐พ", rowId: `${usedPrefix + command} onlygp`}
	]
    },
]

const listMessage = {
  text: '\nAquรญ tiene una lista de lo que puede activar y desactivar',
  footer: fgig, 

  title: `โก Lista de Opciones`,
  buttonText: "Click Aquรญ",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      
      case 'detect':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
    
    case 'antidelete':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break

    case 'document':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'public':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
    case 'antilinkwa':
    case 'antilinkwha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
		  
      case 'antilink2':
      case 'antilinkwa2':
      case 'antilinkwha2':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
        }
      }
      chat.antiLink2 = isEnable 
      break
      
      case 'sololatinos':
      case 'sololatino':
      case 'onlylatinos':
      case 'onlylat':
      case 'onlylatan':
      case 'sololatan':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.onlyLatinos = isEnable
      break
      
      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'autolevelup':
    isUser = true
     user.autolevelup = isEnable
     break
     
     case 'chatbot':
     case 'autosimi':
     case 'autosimsimi':
      isUser = true
      user.chatbot = isEnable
     break
     
    case 'restrict':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
      
    case 'gponly':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
      
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage, { quoted: m })
      throw false
  }
  /*conn.sendButton(m.chat, `
โก *OPCIONES*
โโโโโโโโโโโโ
โข ๐๏ธ *Tipo:* ${type} 
โข โ๏ธ *Estado:* ${isEnable ? 'Activo โ' : 'Desactivado ๐ด'}
โข ๐ฎ *Para:* ${isAll ? 'Este bot' : isUser ? '' : 'Este chat'}
โโโโโโโโโโโโ
`,fgig, null, [[`${isEnable ? '๐ด Desactivar' : 'โ Activar'}`, `${isEnable ? `${usedPrefix}off ${type}` : `${usedPrefix}on ${type}`}`], ['โฆโฐ Menu', `${usedPrefix}help`]],m)
*/

m.reply(`
โ *${type}* Se *${isEnable ? 'Activรณ' : 'Desactivรณ'}* ${isAll ? 'para este bot' : isUser ? '' : 'para este chat'}
`.trim()) 

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['nable']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
