const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client,message,args) => {
    
  const type = message.content.split(" ").slice(1,2).join(" ");
  const name = message.content.split(" ").slice(2).join(" ");
if(!type.includes("category" || "text" || "voice"))return message.channel.send('the type must be ``category``, ``text``, ``voice``');
if(type === "text" || "voice"){
let chanl = message.guild.channels.find("name", name);
if(chanl)return message.channel.send("that's already channel here");
if(!chanl){
message.guild.createChannel({
name: name,
type: type
});
message.channel.send(`i've created your "${name}" channel`);
}
} else {
message.guild.createChannel({
name: name,
type: "category"
});
}
      
}
module.exports.help = {
    name: "create"
}
