
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `â³ï¸ *Ingresa el tÃ­tulo de una canciÃ³n*\n\nðEjemplo *${usedPrefix + command}* Lil Peep hate my life`
	let vid = (await yts(text)).all[0]
	if (!vid) throw `â³ï¸ VÃ­deo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('ð§')
	let play = `
	â¡ *R98 MUSIC*
âââââââââââââââ
â¢ ð *TÃ­tulo* : ${title}
â¢ ð *Publicado:* ${ago}
â¢ â *DuraciÃ³n:* ${timestamp}
â¢ ð *Vistas:* ${views}
âââââââââââââââ`
 await conn.sendButton(m.chat, play, saludo, thumbnail, [
    ['ð¶ MP3', `${usedPrefix}fgmp3 ${url}`],
    ['ð¥ MP4', `${usedPrefix}fgmp4 ${url}`]
  ], m, rpl)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid', 'playvi']

export default handler
