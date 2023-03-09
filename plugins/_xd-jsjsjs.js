
let handler = m => m
handler.all = async function (m) {

    if (/^xd|XD|xD|Xd$/i.test(m.text) ) {
      let sticker = 'https://raw.githubusercontent.com/Loops-bot/fgmods/main/img/xd.json'
      
       let stiker = await sticker(null, global.API(`${pickRandom(img)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', { asSticker: true }, m)
    throw stiker.toString()       
     }

  if (/^nay$/i.test(m.text) ) {
     let av = 'https://g.top4top.io/m_2437lm0y21.mp3'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^nay$/i.test(m.text) ) {
    let av = 'https://e.top4top.io/m_2437afchn1.mp3'
    this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler  
