let handler = m => m
handler.all = async function (m) {

    if (/^xd|XD|Xd|xD$/i.test(m.text) ) {
      let vn = './storage/sticker/xd.webp'
      this.sendFile(m.chat, vn, 'xd.webp', null, m, true, { type: 'audioMessage', ptt: true })
     }

  if (/^buenas tardes$/i.test(m.text) ) {
     let vn = ''
     this.sendFile(m.chat, vn, '', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^buenas noches$/i.test(m.text) ) {
    let vn = ''
    this.sendFile(m.chat, vn, '', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
