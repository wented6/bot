const Discord = require("discord.js");
let inventory = require("../jsons/inventory.json");

module.exports.run = async (client,message, args) => {

const atted = message.mentions.members.first();
const usr = message.mentions.users.first();
 
 if (!atted) {
  if(!inventory[message.author.id]){
    inventory[message.author.id] = {
      inventory: ""
    };
  }
 
  let inv = inventory[message.author.id].inventory;
  
  
  if (!inv) {
  let prefleembed = new Discord.RichEmbed()
  .setTitle(`${message.member.displayName}'s inventory`)
  .setTimestamp()
  .setColor(`${message.member.displayHexColor}`)
  .setThumbnail(`${message.author.avatarURL}`)
  .addField('**Inventory:**', `Empty`)
  message.channel.send(prefleembed);
  console.log(`${message.author.username} used the inventory command in the server ${message.guild}`);
 }
 if (inv) {
  let profeembed = new Discord.RichEmbed()
  .setTitle(`${message.member.displayName}'s inventory`)
  .setTimestamp()
  .setColor(`${message.member.displayHexColor}`)
  .addField('**Inventory:**', `${inv}`)
  message.channel.send(profeembed);
  console.log(`${message.author.username} used the inventory command in the server ${message.guild}`);
 } 
} 
 
 if (atted) {
  if(!inventory[usr.id]){
    inventory[usr.id] = {
      inventory: ""
    };
  }
  
  let invo = inventory[usr.id].inventory;
  
 if (!invo){
  let proileed = new Discord.RichEmbed()
  .setTitle(`${atted.displayName}'s inventory`)
  .setTimestamp()
  .setColor(`${atted.displayHexColor}`)
  .addField('**Inventory:**', `None`)
  message.channel.send(proileed);
  console.log(`${message.author.username} used the inventory command in the server ${message.guild} to see ${usr.username}'s inventory`);
 }
 if (invo){
  let leembed = new Discord.RichEmbed()
  .setTitle(`${atted.displayName}'s inventory`)
  .setTimestamp()
  .setColor(`${atted.displayHexColor}`)
  .addField('**Inventory:**', `${invo}`)
  message.channel.send(leembed);
  console.log(`${message.author.username} used the inventory command in the server ${message.guild} to see ${usr.username}'s inventory`);
 }
}
 
 
}
module.exports.help = {
	name: "inventory"
}