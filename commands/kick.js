const Discord = require("discord.js");
let kicks = require("../jsons/kicks.json");

module.exports.run = async (client,message,args) => {
	

let neko = message.guild.members.find("id", "377271843502948354");
  if(!message.member.hasPermission("KICK_MEMBERS") && !neko)return message.reply("you have to have the `KICK_MEMBERS` permission to use this command");
  let wUser = message.mentions.users.first();
  let wmem = message.mentions.members.first();
  if(!wUser) return message.reply("I couldn't find that member");
  let reason = args.join(" ").slice(22);

  if(!kicks[message.author.id]) {
    kicks[message.author.id] = {
    kicks: 0
  };
 }
  if(!kicks[wUser.id]) {
    kicks[wUser.id] = {
    kicks: 0
  };
 }
  
  message.delete(5000);
  if (message.author.id === wUser.id){
	  message.channel.send(`you can't kick yourself`);
  }
  
  const sWar = kicks[wUser.id].kicks;

  kicks[wUser.id] = {
    kicks: sWar + parseInt(1)
  };

  fs.writeFile("./jsons/kicks.json", JSON.stringify(warnings), (err) => {
    if (err) console.log(err)
  });


if (reason) {
let warnbed = new Discord.RichEmbed()
.setTitle(`You've been kicked`)
.setTimestamp()
.setDescription(`from the server ${message.guild}`)
.setColor(0xff0000)
.addField('**By:**', `${message.member.displayName}`)
.addField('**For:**', `${reason}`)
wUser.send(warnbed);
wmem.kick(reason);
}
if (!reason) {
let warnbe = new Discord.RichEmbed()
.setTitle(`You've been warned`)
.setTimestamp()
.setDescription(`in the server ${message.guild}`)
.setColor(0xff0000)
.addField('**By:**', `${message.member.displayName}`)
wUser.send(warnbe);
wmem.kick();
}

message.channel.send(`${message.member.displayName} has kicked ${wmem.displayName}`).then(msg => {msg.delete(5000)});
console.log(`${message.member.displayName} has kicked ${wmem.displayName} from the server ${message.guild}`);



}
module.exports.help = {
    name: "kick"
}