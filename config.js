import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['50494939792', '⍣Loops ᴮᴼᵀ࿐ (creador)', true],
  ['573244488043', '⍣ᴄʀɪᴡɪʟᴏᴘ࿐ (desarrollador)', true], 

 
] //Numeros de owner 

global.mods = ['573125484672'] 
global.prems = ['50494939792', '59897030099', '573244488043']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Loops┃ᴮᴼᵀ' 
global.author = '@R98' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/Loopsbot_r98\n' 
global.dygp = 'https://chat.whatsapp.com/FBt84FrXGG51wQul7vT8Gc'
global.fgsc = 'https://github.com/Loops-bot/R99' 
global.fgyt = 'https://www.youtube.com/@jorgefloreslopez5878'
global.fgpyp = 'https://www.paypal.me/Loopsbot'
global.fglog = 'https://i.imgur.com/Owmb93c.png'

//᭥⚔᭢━━━━━◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞━━━━━᭥⚔᭢
global.stime = function clockString(seconds) {
  var d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  var h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  var m = Math.floor((seconds / (1000 * 60)) % 60);
  var s = Math.floor((seconds / 1000) % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia," : " Dias,") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay ? dDisplay + hDisplay + mDisplay + sDisplay : '0 Segundos'
};
//╰─────────────────────╯

//᭥⚔᭢━━━━━◜𝑻𝑰𝑬𝑴𝑷𝑶 MENU◞━━━━━᭥⚔᭢
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'una linda noche 🌙'; break; case 1: hour = 'una linda noche 💤'; break; case 2: hour = 'una linda noche 🦉'; break; case 3: hour = 'una linda mañana ✨'; break; case 4: hour = 'una linda mañana 💫'; break; case 5: hour = 'una linda mañana 🌅'; break; case 6: hour = 'una linda mañana 🌄'; break; case 7: hour = 'una linda mañana 🌅'; break; case 8: hour = 'una linda mañana 💫'; break; case 9: hour = 'una linda mañana ✨'; break; case 10: hour = 'un lindo dia 🌞'; break; case 11: hour = 'un lindo dia 🌨'; break; case 12: hour = 'un lindo dia ❄'; break; case 13: hour = 'un lindo dia 🌤'; break; case 14: hour = 'una linda tarde 🌇'; break; case 15: hour = 'una linda tarde 🥀'; break; case 16: hour = 'una linda tarde 🌹'; break; case 17: hour = 'una linda tarde 🌆'; break; case 18: hour = 'una linda noche 🌙'; break; case 19: hour = 'una linda noche 🌃'; break; case 20: hour = 'una linda noche 🌌'; break; case 21: hour = 'una linda noche 🌃'; break; case 22: hour = 'una linda noche 🌙'; break; case 23: hour = 'una linda noche 🌃'; break;}
  global.saludo = "Espero que tengas " + hour;
//╰─────────────────────╯

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
