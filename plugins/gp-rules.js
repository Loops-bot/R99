
let handler = async (m, { conn }) => {

m.fakereply(`
≡  *Loopsᴮᴼᵀ ┃ RULES*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ 📜 *Normas del Grupo*

▢ ✅ El tema principal son los Bots de WhatsApp pero se permite hacer preguntas sobre cualquier otro tema.

▢ ⚠️ No hacer spam: compartir links no autorizados, ads, cryptos, spam de comandos

▢ ⚠️ Respetar a los usuarios del grupo

▢ ⚠️ No robar si están jugando al */slot*

▢ 🚫 Contenido o demás relacionado con +18 🔞

▢ Incumplir las reglas significa podrías recibir un castigo o ser expulsado.
◈ ━━━━━━━━━━━━━━━━━━━━ ◈

}
handler.help = ['rules']
handler.tags = ['group']
handler.command = ['rules', 'rule', 'Rules', 'RULES'] 

export default handler
