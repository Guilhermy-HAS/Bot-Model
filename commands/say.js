const Discord = require("discord.js")

exports.run = async (client, message, args) => {

let say = args.join(" ")
if(!say) return message.reply("Insira uma mensagem")
message.channel.send(say)
message.delete()

}
