const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    var embed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(`${client.user.avatarURL}`)
	.setTitle(`links:`)
	.addField("**links to invite me to a server:**",`[Nekobot™/invite (admin)](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8) || [Nekobot™/invite (mod)](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=1412820055)`)
	.addField("**links to my support severs:**", `[Nekobot™ official](https://discord.gg/SQFbf9q) || [Jiko's bots](https://discord.gg/4eMsYmx)`)
	.addField("**bot list links:**", `[Discord_Bot_List/Nekobot™](https://discordbots.org/bot/389890733576028161) || [Discord_Bots/Nekobot™](https://bots.discord.pw/bots/389890733576028161) || [Bots_for_Discord/Nekobot™](https://botsfordiscord.com/bot/389890733576028161) || [botlist.space/Nekobot™](https://botlist.space/view/389890733576028161)`)
	message.channel.send({embed: embed}).then(message => {message.delete(21000)});
console.log(`sent links to ${message.author.username} in ${message.guild}`);
	message.delete(20000);
}

module.exports.help = {
    name: "invite"
}
