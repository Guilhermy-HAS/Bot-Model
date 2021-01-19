const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if(message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não tem permissão")
  const user = message.mentions.users.first() || client.user.cache.get(args[0])
  if(!user) return message.reply("Mencione um usuário!"]
  const motivo = args.join(" ").slice(22)
  const member = message.guild.member(user)
  if (member) {

  member.ban({ reason: "motivo aqui :)"  }).then(() => {
   
  message.reply("🔨 Ban!\nUsuario banido: ${user.tag}\nAutor: ${message.author}\nMotivo: ${motivo}")
}).catch(err => {

  message.reply("eu não consigo banir este membro.")
  console.error(err)
})
 }
}
