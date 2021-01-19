const Discord = require('discord.js')

exports.run = async (client, message, args) => {

const list = [
  'link-de-gif1.gif',
  'link-de-gif2.gif',
  'link-d-gif3.gif'
];

const crea = list[Math.floor(Math.random() * list.length)]
const user = message.mentions.users.first() || client.users.cache.get(args[0])
if(!user) return message.reply("Mencione alguem para beijar...")

const embed = new Discord.MessageEmbed()
.setTitle(':two_hearts: Kiss')
.setImage(crea)
.setDescription(`${message.author} acaba de beijar ${user}`)
.setTimestamp()
.setFooter(':)')
message.channel.send(embed)
}
