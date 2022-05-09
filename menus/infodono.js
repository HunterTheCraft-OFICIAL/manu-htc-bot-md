const infodono = (prefix, numerodn, NomeDoBot) => {

// NÃO APAGUE ESSE ${NickDono} nem 
//${numerodn} nem ${NomeDoBot} nem ${prefix} só se quiser apagar completo, não coloque nada ${dentro assim} ISSO SÃO DEFINIÇÕES QUE ESTÁ PUXANDO DO settings.json, da pasta dono, só pode altera a base de tudo, menos as definições, só se quiser apagar a definição completa.

return`
╭───────────────
╎
┝  ⎙  Informações Dono/Bot
╎
╰───────────────

│-➤ Proprietario: 

│-➤ [ wa.me/${numerodn} ]

│-➤ Prefixo : ${prefix}

│-➤ ${NickDono}

│-➤ ${NomeDoBot} 

│-➤ Chave Pix Aleatória para pagamento é doação 

│-➤ f0a801dd-4ac0-469e-8feb-c8a9b256d7db

╰─────────────╯
`
}

exports.infodono = infodono