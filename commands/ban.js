const Discord = require("discord.js");
const fs = require("fs");
let bans = require("../jsons/bans.json");

module.exports.run = async (client,message,args) => {
let ugu = message.content.split(" ").slice(1).join(" ");	  
let wUser = message.mentions.users.first();
let wmem = message.mentions.members.first()||message.guid.members.get("id", ugu);
	  
const neko = message.guild.members.find("id", "377271843502948354");
  if(!message.member.hasPermission("BAN_MEMBERS") && !neko)return message.reply('you have to have the `"BAN_MEMBERS"` permission to use this command');
  if(!wmem)return message.reply("I couldn't find that member");
  if (wmem === neko)return message.reply("i won't ban my master");
  let reason = message.content.split(" ").slice(2).join(" ");

  if(!bans[message.author.id]) {
    bans[message.author.id] = {
    bans: 0
  };
 }
  if(!bans[wUser.id]) {
    bans[wUser.id] = {
    bans: 0
  };
 }
  
  const sWar = bans[wUser.id].bans;

  bans[wUser.id] = {
    bans: sWar + parseInt(1)
  };

  fs.writeFile("./jsons/bans.json", JSON.stringify(bans), (err) => {
    if (err) console.log(err)
  });


if (reason) {
wmem.ban(reason);
}
if (!reason) {
wmem.ban();
}

message.channel.send(`${message.member.displayName} has banned ${wmem.displayName}`).then(msg => {msg.delete(5000)});
message.delete(5000);


}
module.exports.help = {
    name: "ban"
}
