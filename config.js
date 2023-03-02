import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['50494939792', 'Loops ᴮᴼᵀ ✨ (creador)', true],
  ['573244488043', '⍣ᴄʀɪᴡɪʟᴏᴘ࿐ (desarrollador)', true], 
  ['5492622271736'] 
] //Numeros de owner 

global.mods = ['573125484672'] 
global.prems = ['50494939792']
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
global.author = '@R99' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/Loopsbot_r98\n' 
global.dygp = 'https://chat.whatsapp.com/FBt84FrXGG51wQul7vT8Gc'
global.fgsc = 'https://github.com/Loops-bot/R99' 
global.fgyt = 'https://www.youtube.com/@jorgefloreslopez5878'
global.fgpyp = 'https://www.paypal.me/Loopsbot'
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

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
