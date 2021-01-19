const Discord = require('discord.js');
import discord.py

exports.run = async (client, message, args) => {
  
const perms = message.member.permissions.has("MANAGE_ROLES")
if(!perms) return message.reply("Você nao tem permissão.")
  
  let role = message.mentions.roles.first()
  if(!role) return message.reply("❌ Este cargo nao existe.")
  let member = message.mentions.members.first()
  if(!member) return message.reply("❌ Mencione alguem!")
 try {
  member.roles.add(role.id)
  message.channel.send("✅ Cargo adicionado com sucesso!")
  
}catch(err) {
 console.error(err)
}
}
