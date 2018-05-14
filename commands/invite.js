const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    var embed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	.setTimestamp()
	.setThumbnail(`${client.user.avatarURL}`)
	.setTitle(`${client.user.username}'s invite link`)
	.addField(`**here is the link to invite me to a server:**`,`[**Nekobot™/invite**](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
	message.channel.send({embed: embed}).then(message => {message.delete(25000)});
console.log(`sent invite link to ${message.author.username} in ${message.guild}`);
	message.delete(10000);
}

module.exports.help = {
    name: "invite"
}