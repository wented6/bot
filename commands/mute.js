const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");
  if(args[0] == "help"){
    message.reply("Usage: Nb.mute <user> <1s/m/h/d>");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  let reason = args.slice(2).join(" ");
  let muterole = message.guild.roles.find(`name`, "Muted");
  
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime){
	  tomute.addRole(muterole.id);
	  message.channel.send(`${message.mentions.members.first().displayName} has been muted`);
	  console.log(`${message.member.displayName} has muted ${message.mentions.members.first().displayName} in the server "${message.guild}"`);
  }

  message.delete().catch(O_o=>{});

  try{
    await message.channel.send(`${message.mentions.members.first().displayName} has been muted for ${mutetime}`)
  }catch(e){
    message.channel.send(`${message.mentions.members.first().displayName} has been muted for ${mutetime}`)
  }
  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`${message.mentions.members.first().displayName}'s time it now up and they have been unmuted`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "mute",
  type: "Moderation"
}
