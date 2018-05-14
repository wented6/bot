const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
	const uwu = message.content.split(" ").slice(1).join(" ");

if (!uwu)message.channel.send("please enter the amount of messages you'd like for me to prune");

	let sum1 = message.member
	var neko = message.guild.members.find("id", "377271843502948354");
	
	if (!sum1.hasPermission("MANAGE_MESSAGES") && !neko)return message.reply('you need to have the ``"MANAGE_MESSAGES"`` permission to use this command');
	message.channel.bulkDelete(uwu / 1);
	message.channel.send(`**${message.member.displayName}** pruned **${uwu}** messages`).then(msg => {msg.delete(10000)});
	console.log(`${message.member.displayName} pruned ${uwu} messages in ${message.channel.guild}`);
    
}

module.exports.help = {
    name: "prune"
}