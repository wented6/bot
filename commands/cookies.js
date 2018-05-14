const Discord = require("discord.js");
const cookies = require("../jsons/cookies.json");

module.exports.run = async (client,message,args) => {
	let attd = message.mentions.members.first();
	let usr = message.mentions.users.first();
	
	if (!attd){
	if (!cookies[message.author.id]){
		cookies[message.author.id] = {
			cookies: 0
		}
	}
	let cooki = cookies[message.author.id].cookies;
	if (cooki == "1")return message.channel.send("You have 1 cookie");
	if (cooki == "0")return message.channel.send("You have no cookies");
	message.channel.send(`You have ${cooki} cookies`);
  }
  if (attd){
	  if (!cookies[usr.id]){
		  cooies[usr.id] = {
			  cookies: 0
		  }
	  }
	 let cok = cookies[usr.id].cookies;
	if (cok == "1")return message.channel.send(`${attd.displayName} has 1 cookie`);
	if (cok == "0")return message.channel.send(`${attd.displayName} has no cookies`);
	 message.channel.send(`${attd.displayName} has ${cok} cookies`);
  }
  
   
}

module.exports.help = {
    name: "cookies"
}