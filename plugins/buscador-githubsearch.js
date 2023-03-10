import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
if (!text) throw `â ï¸ Ingrese el nombre de un repositorio de github\n\nð Ejemplo: ${usedPrefix + command} NyanCatBot-MD`
let res = await fetch(global.API('https://api.github.com', '/search/repositories', { q: text }))
let json = await res.json()
if (res.status !== 200) throw json
let str = json.items.map((repo, index) => {
return `
â¢ ð Resultado: ${1 + index}
â¢ ð¦ Link: ${repo.html_url}
â¢ ðµï¸ Creador: ${repo.owner.login}
â¢ ð£ Nombre: ${repo.name}
â¢ ð Creado: ${formatDate(repo.created_at)}
â¢ â° Actualizado: ${formatDate(repo.updated_at)}
â¢ ð Visitas: ${repo.watchers}
â¢ ð´ Bifurcado: ${repo.forks}
â¢ â­ Estrellas: ${repo.stargazers_count}
â¢ ð§© Issues: ${repo.open_issues}
â¢ ð DescripciÃ³n: ${repo.description ? `${repo.description}` : 'Sin DescripciÃ³n'}
â¢ â»ï¸ Clone: ${repo.clone_url}
`.trim()}).join('\n\nâââââââââââââââââ\n\n')
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
let buttonMessage= {
'document': { url: `https://github.com/ALBERTO9883` },
'mimetype': `application/${document}`,
'fileName': `ð±â¸½ââ£Loops á´®á´¼áµà¿ - MDðâ¨áââ°`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/Loops-bot',
'mediaType': 2,
'previewType': 'pdf',
'title': `â¢ Resultados Encontradosð`,
'body': global.author,
'thumbnail': await (await fetch(json.items[0].owner.avatar_url)).buffer(),
'sourceUrl': 'https//wa.me/50499698072'}},
'caption': str,
'footer': `â¢ ðð¸ ð³ð´ðð´ð° ð³ð´ðð²ð°ðð¶ð°ð ðð½\n*ðð´ð¿ð¾ðð¸ðð¾ðð¸ð¾ ð³ð´ ð¶ð¸ðð·ðð±*\n*ð´ðð²ðð¸ð±ð° ${usedPrefix}gitclone <LINK>*`,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'MenÃº ð'}, type: 1}, 
{buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'Info ð'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
    m.reply('â ï¸ *_Resultados no encontrados._*')
  }
}
handler.help = ['githubsearch'].map(v => v + '')
handler.tags = ['search']

handler.command = /^(github|search|buscar)$/i
handler.register = true

export default handler 

function formatDate(n, locale = 'es') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }
