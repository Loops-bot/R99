
let handler = async (m, { conn }) => {

m.reply(`global.wait`)
  
let txt = ` ≡  *Loopsᴮᴼᵀ*
◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢📜 *normas del grupo*

▢✅ el tema principal son los bots de whatsApp pero se permite hacer preguntas sobre cualquier otro tema.
▢⚠️ no hacer spam: compartir links no autorizados, ads, cryptos, spam de comandos
▢⚠️ respetar a los usuarios del grupo
▢⚠️ no robar si están jugando al */slot*
▢🚫 contenido o demás relacionado con +18 🔞
▢incumplir las reglas significa podrías recibir un castigo o ser expulsado.
◈ ━━━━━━━━━━━━━━━━━━━━ ◈`

}
handler.help = ['rules']
handler.tags = ['group']
handler.command = ['rules', 'rule', 'Rules', 'RULES'] 

export default handler
