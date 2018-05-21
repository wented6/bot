const Discord = require("discord.js");

module.exports.run = (client,message,args) => {
 
 const uwu = message.content.split(" ").slice(1).join(" ");
 
if (uwu){
	let server = client.guilds.find("name", uwu);
	let ppl = server.members.filter(mem => mem.user.bot === false).size;
    let bots = server.members.filter(mem => mem.user.bot === true).size;
	if (!server)return message.reply("i'm not in that server ... sorry");
	server.fetchInvites()
	  .then(invites => {
	  let onrinv = invites.find(invite => invite.inviter.id === server.owner.id === true)
	  let chan = server.channels.find("name","general");
          let onr = server.owner;
	  if (onrinv && onr) {
	  let mbed = new Discord.RichEmbed()
	  .setTitle(`${uwu}:`)
	  .setThumbnail(`${server.iconURL}`)
	  .setColor(`${message.member.displayHexColor}`)
	  .addField('**Owned by:**', `${onr} / ${onr.displayName}`)
	  .addField('**Users**', `${ppl} Members, ${bots} bots`)
	  .addField('**Invite link:**', `${onrinv}`)
	  .setFooter(`Requested in: ${message.guild}`, `${message.author.avatarURL}`)
  message.author.send({embed: mbed})
	  }
          if (onrinv && !onr) {
	  let mbed = new Discord.RichEmbed()
	  .setTitle(`${uwu}:`)
	  .setThumbnail(`${server.iconURL}`)
	  .setColor(`${message.member.displayHexColor}`)
	  .addField('**Owned by:**', `Noone`)
	  .addField('**Users**', `${ppl} Members, ${bots} bots`)
	  .addField('**Invite link:**', `${onrinv}`)
	  .setFooter(`Requested in: ${message.guild}`, `${message.author.avatarURL}`)
  message.author.send({embed: mbed})
	  }
          if (!onrinv && !onr) {
                chan.createInvite({ maxAge: 0 })
	  .then(invite => {
	  let mbed = new Discord.RichEmbed()
	  .setTitle(`${uwu}:`)
	  .setThumbnail(`${server.iconURL}`)
	  .setColor(`${message.member.displayHexColor}`)
	  .addField('**Users**', `${ppl} Members, ${bots} bots`)
	  .addField('**Invite link:**', `${invite}`)
	  .setFooter(`Requested in: ${message.guild}`, `${message.author.avatarURL}`)
  message.author.send({embed: mbed})
	  })
	  }
	  if (!onrinv && onr){
		chan.createInvite({ maxAge: 0 })
	  .then(invite => {
	  let mbed = new Discord.RichEmbed()
	  .setTitle(`${uwu}:`)
	  .setThumbnail(`${server.iconURL}`)
	  .setColor(`${message.member.displayHexColor}`)
	  .addField('**Owned by:**', `${server.owner} / ${server.owner.displayName}`)
	  .addField('**Users**', `${ppl} Members, ${bots} bots`)
	  .addField('**Invite link:**', `${invite}`)
	  .setFooter(`Requested in: ${message.guild}`, `${message.author.avatarURL}`)
      message.author.send({embed: mbed})
	  })
	  }
	})
  .catch(console.error);
  message.channel.send('i sent you an invite for the server: ``"'+ uwu +'"`` ');
}
 
if (!uwu){
message.guild.fetchInvites()
  .then(invites => {
	  let onrinv = invites.find(invite => invite.inviter.id === message.guild.owner.id === true)
	  let ppl = message.guild.members.filter(mem => mem.user.bot === false).size;
      let bots = message.guild.members.filter(mem => mem.user.bot === true).size;
	let onr = message.guild.owner;
	  if (onrinv && onr){
	  let mbed = new Discord.RichEmbed()
	  .setTitle(`${message.guild}:`)
	  .setColor(`${message.member.displayHexColor}`)
	  .setThumbnail(`${message.guild.iconURL}`)
	  .addField('**Owned by:**', `${onr} / ${onr.displayName}`)
	  .addField('**Users**', `${ppl} Members, ${bots} bots`)
	  .addField('**Invite link:**', `${onrinv}`)
	  .setFooter(`Requested in: ${message.guild}`, `${message.author.avatarURL}`)
  message.author.send({embed: mbed})
  }
if (onrinv && !onr){
	  let mbed = new Discord.RichEmbed()
	  .setTitle(`${message.guild}:`)
	  .setColor(`${message.member.displayHexColor}`)
	  .setThumbnail(`${message.guild.iconURL}`)
	  .addField('**Users**', `${ppl} Members, ${bots} bots`)
	  .addField('**Invite link:**', `${onrinv}`)
	  .setFooter(`Requested in: ${message.guild}`, `${message.author.avatarURL}`)
  message.author.send({embed: mbed})
  }
  if (!onrinv && onr) {
	  message.channel.createInvite({ maxAge: 0 })
	  .then(invite => {
		  let mbed = new Discord.RichEmbed()
	  .setTitle(`${message.guild}:`)
	  .setColor(`${message.member.displayHexColor}`)
	  .setThumbnail(`${message.guild.iconURL}`)
	  .addField('**Owned by:**', `${onr} / ${onr.displayName}`)
	  .addField('**Users**', `${ppl} Members, ${bots} bots`)
	  .addField('**Invite link:**', `${invite}`)
	  .setFooter(`Requested in: ${message.guild}`, `${message.author.avatarURL}`)
      message.author.send({embed: mbed})
	  })
  }
if (!onrinv && !onr) {
	  message.channel.createInvite({ maxAge: 0 })
	  .then(invite => {
		  let mbed = new Discord.RichEmbed()
	  .setTitle(`${message.guild}:`)
	  .setColor(`${message.member.displayHexColor}`)
	  .setThumbnail(`${message.guild.iconURL}`)
	  .addField('**Users**', `${ppl} Members, ${bots} bots`)
	  .addField('**Invite link:**', `${invite}`)
	  .setFooter(`Requested in: ${message.guild}`, `${message.author.avatarURL}`)
      message.author.send({embed: mbed})
	  })
  }
  })
  .catch(console.error);
  message.channel.send(`i sent you an invite for this server`);
}
   
}
module.exports.help = {
    name: "getinvite"
}
