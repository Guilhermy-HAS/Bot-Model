# Bot-Model
Este repositório irá servir como um modelo para bots que você pode colocar os comandos daqui em seu bot!

Lembre-se de dar créditos a todos os comandos copiados para não haver conflitos.
Claro, também não apenas copiar os códigos e não estuda-los, qualquer dúvida chame o contato profissional abaixo.

guilhermyherry7@gmail.com
----------------------------------------------------------------------------------------------------------------------
© Copyright - Bot-Model Company, todos os direitos reservados.

🔨 Introdução:
-
Primeiramente vá no site https://discord.com/developers e crie uma nova aplicação.
Após isso de um nome a ela, clique em Bot nas 3 barrinhas acima do site e vá em Bot, quando clicar use o botão *Add Bot*.
Claramente, seu bot será criado com um nome gerado da aplicação (O nome que você deu no começo.), depois disso você apenas vá em OAUTH02 nas 3 barrinhas, clique em Bot e coloque as permissões que você quiser.
Clique no botão *COPY* e depois de clicar vá em outra página e adicione seu bot.

🎉 Criando o bot:

Depois de fazer isso, vamos no site *Repl.it* e crie uma nova repl, bom após isso apenas coloque a programação index.js e insira um nome, apenas dê ENTER e crie a sua "repl".

Criando ela, você vai nos arquivos e criar o arquivo .env e o arquivo config.json, Irei explicar o que fazer com eles abaixo:

📍 Config.json - Prefixo do bot

na config.json você irá inserir o prefixo do seu bot de uma forma simples, o código estará abaixo:
{
"prefix":"prefixo-do-seu-bot"
}

📍 .env - Token do bot

no arquivo .env você irá inserir uma coragem simples, mostrarei abaixo:
TOKEN=token-do-seu-bot
(⚠️ AVISO: Um arquivo .env não pode ter espaçamentos! Não use os espaçamentos se não o cliente não consegue verificar o TOKEN.)

📍 Index.js - Servidor do bot

Após fazer esses arquivos vamos em Index.js e vamos fazer nosso bot logar com o Discord, faça isso com este código:

const Discord = require('discord.js');
const client(ou bot, tanto faz) = Discord.Client();

client.login(process.env.TOKEN)
(Se colocou bot no const client, use bot.login!)

💎 EXTRA

Caso queira uma Index completa, ela vai estar nos Codes em Index.js!
