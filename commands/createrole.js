const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
let color = message.content.split(" ").slice(1, 2).join(" ");
let name = message.content.split(" ").slice(2).join(" ");
let rle = message.guild.roles.find("name", name);
if(rle)return message.channel.send("sorry, but that's already a role in this guild");
let sum1 = message.member
    if (!sum1.hasPermission("MANAGE_ROLES") && message.author.id !== "377271843502948354")return message.channel.send('you need to have the ``"MANAGE_ROLES"`` permission to use this command');
	if (sum1.hasPermission("MANAGE_ROLES")) {
	message.guild.createRole({
		name: name,
		color: color
	});
  }
  let embed = new Discord.RichEmbed()
  .setDescription(`**Created role:**\nName: ${name}\n<=Color: ${color}`)
  .setColor(`${color}`)
message.channel.send(embed);
	
}
module.exports.help = {
    name: "createrole"
}
