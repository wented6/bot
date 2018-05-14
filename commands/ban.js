const Discord = require("discord.js");
const fs = require("fs");
let bans = require("../jsons/bans.json");
let kicks = require("../jsons/kicks.json");

module.exports.run = async (client,message,args) => {
	let reason = args.join(" ").slice(22);
  
	message.delete(5000);
	  
let wUser = message.mentions.users.first();
let wmem = message.mentions.members.first();
	  
const neko = message.guild.members.find("id", "377271843502948354");
  if(!message.member.hasPermission("BAN_MEMBERS") && !neko)return message.reply('you have to have the `"BAN_MEMBERS"` permission to use this command');
  if(!wUser) return message.reply("I couldn't find that member");
  if (wmem === neko)return message.reply("i won't ban my master");

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
let warnbed = new Discord.RichEmbed()
.setTitle(`You've been banned`)
.setTimestamp()
.setDescription(`from the server ${message.guild}`)
.setColor(0xff0000)
.addField('**By:**', `${message.member.displayName}`)
.addField('**For:**', `${reason}`)
wUser.send(warnbed);
wmem.ban(reason);
}
if (!reason) {
let warnbe = new Discord.RichEmbed()
.setTitle(`You've been banned`)
.setTimestamp()
.setDescription(`in the server ${message.guild}`)
.setColor(0xff0000)
.addField('**By:**', `${message.member.displayName}`)
wUser.send(warnbe);
wmem.ban();
}

message.channel.send(`${message.member.displayName} has banned ${wmem.displayName}`).then(msg => {msg.delete(5000)});
console.log(`${message.member.displayName} has banned ${wmem.displayName} from the server ${message.guild}`);



}
module.exports.help = {
    name: "ban"
}