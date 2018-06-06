const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
  let mem = message.mentions.members.first();

  message.delete();
  let botmessage = message.content.split(" ").slice(1).join(" ");
  
  if(botmessage.includes("@here")) botmessage = botmessage.repalce("@here", "@ here");
  if(botmessage.includes("@everyone")) botmessage = botmessage.repalce("@everyone", "@ everyone");
  if(botmessage.includes(mem)) botmessage = botmessage.repalce(mem, `@ ${mem.displayName}`);
  
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "sayd"
}
