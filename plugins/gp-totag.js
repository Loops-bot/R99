
let handler = async (m, { conn, text, participants}) => {
	
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    if (!m.quoted) throw `✳️ Responde a un mensaje`
    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}

handler.help = ['totag *<responda a un mensaje>*', 'hidetag *<responda a un mensaje>*']
handler.tags = ['group']
handler.command = /^(totag|tag|hidetag)$/i

handler.admin = true
handler.group = true

export default handler
