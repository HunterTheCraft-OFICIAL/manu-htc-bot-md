const fs = require('fs')
const chalk = require('chalk')

const menu = (prefix, hora2, pushname, date, NomeDoBot) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.  
  
return `​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​★ ▬▬▬▬▬▬▬▬ ★

 
│❲♨️❳ -➤ [🤴🏼] DONO: ${NickDono} 
 

‼️ 𝗖𝗟𝗜𝗤𝗨𝗘 𝗡𝗢 𝗟𝗘𝗥 𝗠𝗔𝗜𝗦
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

 ⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗
╭━━━━━━━◢◤━━━━╮
┃┏┓┏━━┳◢◤┳┓╱╱╱┃
┃┃┣┫╱╱◢◤╱╱┣━━━┃
┃┗┛┗━◢◤┻┻┻┛╱╱╱┃
╰━━━◢◤━━━━━━━━╯
⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗
~ OLÁ ${date}  👋
⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗⋗

╭─────────

┝〢 ${NomeDoBot} 

~ DATA ${pushname} 👋

│|• HORA: ${hora2}

╰────────── 

╭─────────

│|• Para o Bot funcionar corretamente ele precisa ser ADM do Grupo. caso ele não for adm alguns comandos não poderam ser usados!

╰────────── 


╭──────────

│|• Quer o Bot ${NomeDoBot} no seu Grupo? digite o comando!

│-➤ ${prefix}avalie (oi eu quero que coloque o Bot no meu Grupo) (opcional colocar o link do grupo)

│|• Para mais informações entre em contato com meu dono!

│-➤ ${prefix}dono

╰──────────

╎
╰──────────╮
┝━〢⎙ CMD/TERMUX 
╭──────────╯

│-➤${prefix}comandos-termux

│-➤${prefix}hospedar-heroku

│-➤${prefix}configurar-bot

│-➤${prefix}git-bot

╰──────────╮
┝━〢⎙ MENU/DE/CMDS 
╭──────────╯

│-➤${prefix}Menudono

│-➤${prefix}Efeitosimg

│-➤${prefix}Menuadm

│-➤${prefix}Menupremium

│-➤${prefix}Logos

│-➤${prefix}Brincadeiras

│-➤${prefix}Alteradores

╰──────────╮
┝━〢⎙ PARA/MEMBROS 
╭──────────╯

│-➤${prefix}Infobot

│-➤${prefix}Idiomas 

│-➤${prefix}Bug (QUESTIONE) 

│-➤${prefix}Sugestao (DICA) 

│-➤${prefix}Avalie (O-QUAO-BOM) 

╰──────────╮
┝━〢⎙ INFO/DONO 
╭──────────╯

│-➤${prefix}Fotomenu (MARCAR-IMG) 

│-➤${prefix}Gifmenu (MARCAR) 

│-➤${prefix}InfoBemvindo

│-➤${prefix}Infopalavrão

│-➤${prefix}Infolistanegra

│-➤${prefix}Infobancarac

│-➤${prefix}Infovotação

│-➤${prefix}Infocontador

│-➤${prefix}Infosorteio


╰──────────╮
┝━〢⎙ PESQUISA/BAIXAR
╭──────────╯

│-➤${prefix}Play (NOME) 

╎⩺ ${prefix}pesquisar-grupos (nome)

│-➤${prefix}Playmp4 (NOME) 

│-➤${prefix}Ytsearch (NOME) 

│-➤${prefix}Ytmp4 (LINK) 

│-➤${prefix}pesquisar (Google) 

│-➤${prefix}Ytmp3 (LINK) 

│-➤${prefix}Tiktok (LINK) 

│-➤${prefix}Instadw (LINK) 

│-➤${prefix}Twitter (LINK) 

│-➤${prefix}Imgpralink (MARCAR)

│-➤${prefix}Videopralink (MARCAR-V) 

│-➤${prefix}gerargp

╰──────────╮
┝━〢⎙ INFORMAÇÕES
╭──────────╯

│-➤${prefix}Ping (VELO) 

│-➤${prefix}Gitdobot

│-➤${prefix}Atividade

│-➤${prefix}Rankativo

│-➤${prefix}Checkativo (@MARCAR)

│-➤${prefix}Ranklevel (DE-TODOS) 

╰──────────╮
┝━〢⎙ JOGOS/QUIZ 
╭──────────╯

│-➤${prefix}Ppt (PEDRA/PAPEL/TESOURA) 

│-➤${prefix}Jogodavelha (@MARCAR) 

│-➤${prefix}Ttt (JOGO-DA-VELHA) 

│-➤${prefix}Cassino

│-➤${prefix}Quizanime 1 / 0

│-➤${prefix}Quizanimais 1 / 0

│-➤${prefix}Anagrama 1 / 0

╰──────────╮
┝━〢⎙ FIGURINHAS 
╭──────────╯

│-➤${prefix}Attp (TEXTO)

│-➤${prefix}Ttp (TEXTO)

│❲-➤${prefix}Fsticker (MARCAR-FOTO)

│-➤${prefix}Sticker (MARCAR-FOTO)

│-➤${prefix}Toimg (MARCAR-FIGU)

│-➤${prefix}Togif (MARCAR-FIGU)

│-➤${prefix}Roubar (TEXT/TEXT)

╰──────────╮
┝━〢⎙ CMDS/BÁSICOS 
╭──────────╯

│-➤${prefix}Gtts (LINGUAGEM + TEXTO)

│-➤${prefix}Traduzir Hello 

│-➤${prefix}Tagme 

│-➤${prefix}Emoji

│-➤${prefix}Emojimix

│-➤${prefix}Tabela (LETRAS) 

│-➤${prefix}Conselhobiblico

│-➤${prefix}Simi (FALE-ALGO)  

│-➤${prefix}Perfil

│-➤${prefix}Frases

│-➤${prefix}Calcular (1 + 1)

│-➤${prefix}Fazernick (NICK)

│-➤${prefix}Bot

╰─────────────

╰──────────╮
┝━〢⎙ MENU/PREMIUM 
╭──────────╯


╎⩺ ${prefix}Destrava

╎⩺ ${prefix}Destrava2

╎⩺ ${prefix}Ddd (DDD)

╎⩺ ${prefix}Cep (NÚMERO)

╎⩺ ${prefix}GerarCPF

│-➤${prefix}gerargp

╎⩺ ${prefix}pesquisar-grupos (nome)

╎⩺ ${prefix}PremiumList

╎⩺ ${prefix}puxarfoto (MARCAR) 

╎⩺ ${prefix}LerFoto (MARCAR)

╎⩺ ${prefix}EncurtaLink (LINK)

└────────────⭓ 

`
}

exports.menu = menu

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`ATUALIZANDO AUTOMATICAMENTE O ARQUIVO QUE VC MEXEU `))
	delete require.cache[file]
	require(file)
})
