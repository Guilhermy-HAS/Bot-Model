const Discord = require("discord.js")

exports.run = async (client, message, args) => {

const pingMessage = await message.channel.send("Ping?")

pingMessage.edit(`🎾 Pong!\n💎 Latência do servidor: ${pingMessage.createdTimestamp - message.createdTimestamp}\n📡 Latência da API: ${Math.round(client.ws.ping)}`)

}
