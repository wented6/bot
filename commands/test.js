const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
	let embed = new Discord.RichEmbed()
        .setColor(`${message.member.displayHexColor}`)
        .addField("Link:", "[**Click me**](https://discordapp.com/developers/applications/me)");
        
    message.channel.send({embed: embed});

}
module.exports.help = {
    name: "test"
}
