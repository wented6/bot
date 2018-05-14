const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
let ppl = message.guild.members.filter(mem => mem.user.bot === false).size;
let bots = message.guild.members.filter(mem => mem.user.bot === true).size;

let txt = message.guild.channels.filter(c => c.type === 'text').size;
let vcs = message.guild.channels.filter(c => c.type === 'voice').size;
let cats = message.guild.channels.filter(c => c.type === 'category').size;

const RichEmbed = new Discord.RichEmbed()
      .setColor(`${message.member.displayHexColor}`)
       .setTimestamp()
	   .setThumbnail(message.guild.iconURL)
	   .setTitle(`${message.guild}`)
	   .addField('**Owner:**', `${message.guild.owner.displayName}`)
       .addField('**Region:**', `${message.guild.region}`)
       .addField('**# of Roles:**', `${message.guild.roles.size}`)
	   .addField('**# of Members:**', `${ppl} members, ${bots} bots`)
	   .addField('**# of Emojis:**', `${message.guild.emojis.size}`)
       .addField('**Server Created:**', `${message.guild.createdAt}`)
	   .addField('**(cats/txt/vc):**', `${cats}/ ${txt}/ ${vcs}`)
	   message.channel.send({embed: RichEmbed})
	   console.log(`serverinfo command has been used by ${message.author.username} in ${message.guild}`);
}
module.exports.help = {
    name: "serverinfo"
}