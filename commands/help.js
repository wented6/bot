const Discord = require("discord.js");
const prefixes = require("../jsons/prefixes.json");

module.exports.run = async (client,message,args) => {
	
	const prefix = prefixes[message.guild.id].prefixes;
const uwu = message.content.split(" ").slice(1).join(" ");

if (!uwu) {	
    const RichEmbed = new Discord.RichEmbed()
    .setColor(`${message.member.displayHexColor}`)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL)
    .setTitle(`help for ${client.user.username}`)
    .addField('**Misc commands:**', '`ping` `cookies` `give` `google` `translate` `urban` `anime` `weather` `getinvite` `invite` `role` `sayd` `rep` `setdesc`')
    .addField('**Image commands:**', '`neko` `rem` `animepic` `nsfw` `lizard` `dog` `bird` `bunny` `pat` `pout` `cry` `hug` `kiss` `OwO` `avatar` `servericon`')
	.addField('**Currency commands:**', '`buy*` `sell*` `shop*` `gamble` `balance` `bank` `transfer`')
    .addField('**Moderation commands:**', '`lvls` `poll` `mute` `kick` `ban` `prune` `setprefix` `setlvlmsg` `warn` `clearwarn`')
    .addField('**Information commands:**', '`roleinfo` `serverinfo` `botinfo` `userinfo` `profile` `level`')
    .addField('**Masters exclusive:**', '`setbotname` `setinv` `seton` `setdnd` `setidle` `eval` `restart` `reload`')
	.addField('**Music commands:**', '`play` `skip` `stop` `np` `queue` `volume` `pause` `resume`')
    .setDescription(`commands with a "*" are stll being worked on`)
    .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
    message.channel.send({embed: RichEmbed});
    console.log(`help command has been used by ${message.author.username} in ${message.channel.guild}`);
}
if (uwu === "gamble"){
	 const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`gamble help`)
	 .addField('**Info:**', 'lets you gamble away all your money (or earn a lot if youre lucky)')
	 .addField('**Useage:**', `${prefix}gamble <amount>`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help gamble command has been used by ${message.member.displayName} in ${message.guild}`);
 }
 if (uwu === "ping"){
	 const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`ping help`)
	 .addField('**Info:**', 'pongs, then tells ping time in ms')
	 .addField('**Useage:**', `${prefix}ping`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help ping command has been used by ${message.member.displayName} in ${message.guild}`);
 }
 if (uwu === "serverinfo"){
	 const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`serverinfo help`)
	 .addField('**Info:**', 'gives you info on a server')
	 .addField('**Useage:**', `${prefix}serverinfo`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help serverinfo command has been used by ${message.member.displayName} in ${message.guild}`);
 }
 if (uwu === "balance"){
	 const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`bal help`)
	 .addField('**Info:**', 'shows you the balance of a user')
	 .addField('**Useage:**', `${prefix}balance / ${prefix}balance @user`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help bal command has been used by ${message.member.displayName} in ${message.guild}`);
 }
 if (uwu === "transfer"){
	 const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`transfer help`)
	 .addField('**Info:**', 'tansfers money to people')
	 .addField('**Useage:**', `${prefix}transfer @user <amount>`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help transfer command has been used by ${message.member.displayName} in ${message.guild}`);
}
if (uwu === "profile"){
	 const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`profile help`)
	 .addField('**Info:**', 'shows you a users profile')
	 .addField('**Useage:**', `${prefix}profile / ${prefix}profile @user`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help profile command has been used by ${message.member.displayName} in ${message.guild}`);
 }
 if (uwu === "level"){
	 const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`level help`)
	 .addField('**Info:**', 'shows you a users level stats')
	 .addField('**Useage:**', `${prefix}level / ${prefix}level @user`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help level command has been used by ${message.member.displayName} in ${message.guild}`);
 }
 if (uwu === "setprefix"){
	 const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`setprefix help`)
	 .addField('**Info:**', 'sets the preix for the server')
	 .addField('**Required permissions:**', '`ADMIMNISTRATOR`')
	 .addField('**Useage:**', `${prefix}setprfix <new prefix>`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help setrefix command has been used by ${message.member.displayName} in ${message.guild}`);
 }
 if (uwu === "ban"){
	  const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`ban help`)
	 .addField('**Info:**', 'Bans  user from the server')
	 .addField('**Required permissions:**', '`BAN_MEMBERS`')
	 .addField('**Useage:**', `${prefix}ban @user / ${prefix}ban @user <reason>`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help ban command has been used by ${message.member.displayName} in ${message.guild}`);
 }
 if (uwu === "kick"){
	 const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`kick help`)
	 .addField('**Info:**', 'Kicks  user from the server')
	 .addField('**Required permissions:**', '`KICK_MEMBERS`')
	 .addField('**Useage:**', `${prefix}kick @user / ${prefix}kick @user <reason>`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help kick command has been used by ${message.member.displayName} in ${message.guild}`);
 }
 if (uwu === "warn"){
	 const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`warn help`)
	 .addField('**Info:**', 'warns a user in the server')
	 .addField('**Required permissions:**', '`MANAGE_ROLES`')
	 .addField('**Useage:**', `${prefix}warn @user / ${prefix}warn @user <reason>`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help warn command has been used by ${message.member.displayName} in ${message.guild}`);
 }
 if (uwu === "clearwarn"){
	  const RichEmbed = new Discord.RichEmbed()
	.setColor(`${message.member.displayHexColor}`)
	 .setTimestamp()
	 .setTitle(`clearwarn help`)
	 .addField('**Info:**', 'clears all of a users warnings')
	 .addField('**Required permissions:**', '`MANAGE_ROLES`')
	 .addField('**Useage:**', `${prefix}clearwarn @user / ${prefix}clearwarn @user <reason>`)
	 .setFooter(`Requested by: ${message.member.displayName}`, `${message.author.avatarURL}`)
	 message.channel.send({embed: RichEmbed});
	 console.log(`help clearwarn command has been used by ${message.member.displayName} in ${message.guild}`);
 }

}
module.exports.help = {
    name: "help",
	alias: "h",
	type: "help"
}
