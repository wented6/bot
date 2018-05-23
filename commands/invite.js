const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    var embed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(`${client.user.avatarURL}`)
	.setTitle(`links:`)
	.addField("**link to invite me to a server:**",`[Nekobot™/invite](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
	.addField("**link to my support sever:**", `[Nekobot™ official](https://discord.gg/SQFbf9q)`)
	.addField("**if you like the bot, show it:**", `[upvote](https://discordbots.org/bot/389890733576028161/vote)`)
	message.channel.send({embed: embed}).then(message => {message.delete(21000)});
console.log(`sent links to ${message.author.username} in ${message.guild}`);
	message.delete(20000);
}

module.exports.help = {
    name: "invite"
}
