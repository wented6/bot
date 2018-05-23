const Discord = require("discord.js");
const parseTime = function(milliseconds) {
  var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
  var minutes = Math.floor(seconds/60); seconds %= 60;
  var hours = Math.floor(minutes/60); minutes %= 60;
  var days = Math.floor(hours/24); hours %= 24;
  var written = false;
  return(days?(written=true,days+" days"):"")+(written?", ":"")
      +(hours?(written=true,hours+" hours"):"")+(written?", ":"")
      +(minutes?(written=true,minutes+" minutes"):"")+(written?", ":"")
      +(seconds?(written=true,seconds+" seconds"):"")+(written?", ":"")
      +(milliseconds?milliseconds+" milliseconds":"");
};

module.exports.run = async (client,message,args) => {

 if (message.author.id !== "377271843502948354")return;
	
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

    try{
      const code = args.join(" ");
      let evaled = eval(code);

      if (!code)return message.channel.send("Please enter smth to eval");
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
	
	if (evaled.length > 1024){
		console.log(evaled)
		message.channel.send(`the output was longer than 1500 ... so i put it in the console`);
	};
	
	if (evaled.includes(client.token)){
	    evaled = evaled.replace(client.token, "that's a secret");
	}

	
     let evbed = new Discord.RichEmbed()
     .setTimestamp()
     .setColor(0x00fff0)
     .addField('**Input:**', '```'+ code +'```')
     .addField('**Output:**', '```'+ clean(evaled) +'```')
      message.channel.send({embed: evbed});
    
	} catch (err) {
    let errbed = new Discord.RichEmbed()
    .setColor(0xff0000)
	.setTimestamp()
	.addField('**Error:**', '```'+ clean(err) +'```')
    message.channel.send({embed: errbed});
    }

	
	
}

module.exports.help = {
    name: "eval"
}
