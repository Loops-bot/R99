
let handler = async (m, { conn, participants, usedPrefix, command }) => {
	
let kickte = `✳️ Uso correcto del comamdo\n*${usedPrefix + command}* @tag`



if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
m.reply(`✅ Usuario eliminado`) 
let av = './src/mp3/kick.mp3'	
conn.sendFile(m.chat, av, 'kick.mp3', null, m, true, { type: 'audioMessage', ptt: true })
	

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'expulsar'] 
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.register = true

export default handler
