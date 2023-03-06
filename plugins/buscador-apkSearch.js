//By Loops-bot +50494939792

import { googleImage } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, {text, usedPrefix, command, conn}) => {
if (!text) throw `*⚠️ Ingrese el nombre de la apk o app que desea buscar.*`
let sfoto = fs.readFileSync('./storage/image/apksearch.png')

let json = await fetch(`https://api.akuari.my.id/search/searchapk2?query=${text}`)
let jsons = await json.json()
let caption = `*⊜ RESULTADOS🔎*\n`
for (let x of jsons.respon) {
caption += `
*• 🏷 Nombre:* *_${x.title}_*
*• 🔗 Url:* _${x.link}_
*• 🎋 Actualizado:* ${x.update}\n───
`}
conn.sendButton(m.chat, caption, sfoto, `• Resultados Encontrados🔎`, fgig, saludo, m)}

handler.tags = ['search']
handler.command = ['apksearch', 'buscarapk']
handler.help = ['apksearch']
handler.register = true
export default handler
