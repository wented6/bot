const Discord = require("discord.js");
const cookies = require("../jsons/cookies.json");

module.exports.run = async (client,message,args) => {
const num = message.content.split(" ").slice(2,3).join(" ");
const obj = message.content.split(" ").slice(3).join(" ");
let attd = message.mentions.members.first();
let usr = message.mentions.users.first();

if (!cookies[message.author.id]){
		cookies[message.author.id] = {
			cookies: 0
		}
	}
	if (!cookies[usr.id]){
		  cookies[usr.id] = {
			  cookies: 0
		  }
	  }
	  
const cooki = cookies[message.author.id].cookies;
const coki = cookies[usr.id].cookies;

if (!attd)return message.channel.send("Please mention a user");
if (num == "cookie"){
		if (cooki < "1")return message.channel.send("You don't have enough cookies to give that many");
	cookies[message.author.id] = {
    cookies: cooki - parseInt(1)
  };

  cookies[usr.id] = {
    cookies: coki + parseInt(1)
  };
  let mbd = new Discord.RichEmbed()
  .setTitle(`${message.member.displayName} has given ${attd.displayName} a cookie`)
  .setDescription('nom nom nom \nYou can give your cookies away now ... or you can save them for later')
  .setColor(`${message.member.displayHexColor}`)
message.channel.send({embed: mbd});
}

if (obj == "cookies"){
	if (cooki < num)return message.channel.send("You don't have enough cookies to give that many");
	cookies[message.author.id] = {
    cookies: cooki - parseInt(num)
  };

  cookies[usr.id] = {
    cookies: coki + parseInt(num)
  };
  let mbd = new Discord.RichEmbed()
  .setTitle(`${message.member.displayName} has given ${attd.displayName} ${num} cookies`)
  .setDescription('nom nom nom \nYou can give these cookies away now .. or keep them')
  .setColor(`${message.member.displayHexColor}`)
message.channel.send({embed: mbd});
}
	
	
	
}
module.exports.help = {
    name: "give"
}