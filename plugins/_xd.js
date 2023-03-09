import { sticker } from '../lib/sticker.js'

import axios from 'axios'

    if (/^xd|XD|Xd|xD$/i.test(m.text) ) {
        let handler = async (m, { conn, text, usedPrefix, command }) => {
	let sticker = (await axios.get('https://raw.githubusercontent.com/Loops-bot/fgmods/main/img/xd.json')).data
    let stiker = await sticker(null, global.API(`${pickRandom(img)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', { asSticker: true }, m)
    throw stiker.toString()   
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
