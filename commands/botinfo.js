const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    var neko = message.guild.members.find("id", "377271843502948354");
	var now = Date.now();
	var msec = now - client.readyTimestamp;
	var days = Math.floor(msec / 1000 / 60 / 60 / 24);
	msec -= days * 1000 * 60 * 60 * 24;
	var hours = Math.floor(msec / 1000 / 60 / 60);
	msec -= hours * 1000 * 60 * 60;
	var mins = Math.floor(msec / 1000 / 60);
	msec -= mins * 1000 * 60;
	var secs = Math.floor(msec / 1000);
	var timestr = "";
	if(days > 0) {
		timestr += days + " days ";
	}
	if(hours > 0) {
		timestr += hours + " hours ";
	}
	if(mins > 0) {
		timestr += mins + " minutes ";
	}
	if(secs > 0) {
		timestr += secs + " seconds ";
	}
	console.log(`Current uptime is: ${timestr}`)
	const RichEmbed = new Discord.RichEmbed()
	   .setColor(`${message.member.displayHexColor}`)
	   .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
		  .setTimestamp()
		  .setThumbnail(client.user.avatarURL)
		  .setTitle(`info for ${client.user.username}`)
		  .addField('**My Owner:**', `${neko.user.tag}`)
		  .addField('**Discord.js Version:**', `v${Discord.version}`)
		  .addField('**Node.js Version:**', `${process.version}`)
		  .addField('**Memory useage:**', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
		  .addField('**# of servers im in:**', `${message.client.guilds.size}`)
		  .addField('**# of users i have:**', `${client.users.size}`)
		  .addField('**uptime:**', "" + timestr)
		  .addField('**status:**', `${message.client.user.presence.status}`)
		  .addField('**Playing:**', `${message.client.user.presence.game.name}`)
		  .addField('**Created at:**', `${client.user.createdAt}`)
		  .setDescription(`this is the bot's info`)
	   message.channel.send({embed: RichEmbed})
	   console.log(`botinfo command has been used by ${message.author.username} in ${message.channel.guild}`);
}

module.exports.help = {
  name:"botinfo"
}
