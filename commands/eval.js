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
      +(seconds?(written=true,seconds+" seconds"):"")+(written?" ":"");
};
module.exports.run = async (client,message,args) => {
if(message.author.id !== '377271843502948354')return;

const input = args.join(' ');
try {
    
    let output = await eval(input);
    if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
    
    if (output.includes(client.token)) output = output.repalce(client.token, "that's a secret");
    
    if (output.length > 1024)return console.log(output) && message.channel.send(`Exceeding message length... printing in console.`);
    
    let embed = new Discord.RichEmbed()
     .setTimestamp()
     .setColor(0x00fff0)
     .addField('**Input:**', '```js\n'+ input +'```')
     .addField('**Output:**', '```js\n'+ output +'```')
      return message.channel.send({embed});
	  
} catch (err) {
    let errbed = new Discord.RichEmbed()
    .setColor(0xff0000)
	.setTimestamp()
	.addField('**Error:**', '```'+ err +'```')
    message.channel.send({embed: errbed});
}

}
module.exports.help = {
    name: "eval",
    alias: "evaluate"
}
