const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
var RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(client.user.avatarURL)
	.setTitle(`link to ${client.user.username}'s Official server`)
	.addField('**Nekobot™ Official server:**', 'https://discord.gg/SQFbf9q')
	.addField(`**Message from my master:**`, `I made the server for people that actually like and care about the bot, as a place for them to help me with the bot and have fun at the same time. In the server people can add suggestions for the bot as well as see updates and what i'm currently working on in the code.`)
	.setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	message.channel.send({embed: RichEmbed});
	console.log(`${message.author.username} used the joinOfficial command in ${message.guild}`)
	

}

module.exports.help = {
  name: "join-official"
}