const Discord = require("discord.js");
const parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var written = false;
    return(days?(written=true,days+" days"):"")+(written?", ":"")
      +(hours?(written=true,hours+" hours"):"")+(written?", ":"")
      +(minutes?(written=true,minutes+" minutes"):"")+(written?", ":"")
      +(seconds?(written=true,seconds+" seconds"):"")+(written?" ":"");
};
module.exports.run = async (client,message,args) => {
    var neko = client.users.find("id", "377271843502948354");
	const RichEmbed = new Discord.RichEmbed()
	   .setColor(`${message.member.displayHexColor}`)
	   .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
		  .setTimestamp()
		  .setThumbnail(client.user.avatarURL)
		  .setTitle(`info for ${client.user.username}`)
		  .addField('**Creator:**', `${neko.username}#${neko.discriminator}`)
		  .addField('**Discord.js Version:**', `v${Discord.version}`)
		  .addField('**Node.js Version:**', `${process.version}`)
		  .addField('**Memory useage:**', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
		  .addField('**# of servers im in:**', `${message.client.guilds.size}`)
		  .addField('**# of users i have:**', `${client.users.size}`)
		  .addField('**uptime:**', `${parseTime(client.uptime)}`)
		  .addField('**Created on:**', '12/11/2017')
	   message.channel.send({embed: RichEmbed})
	   console.log(`botinfo command has been used by ${message.author.username} in ${message.channel.guild}`);
}

module.exports.help = {
  name:"botinfo"
}
