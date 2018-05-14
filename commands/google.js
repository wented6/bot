const Discord = require("discord.js");
const google = require('google-it');

module.exports.run = async (client,message,args) => {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
let gbed = new Discord.RichEmbed()
.setTitle(`Results for: ${input}`)
.setDescription(`${results[0].title}`)
.setColor(`${message.member.displayHexColor}`)
.addField('**Link:**', `${results[0].link}`)
.addField('**Description:**', `${results[0].snippet}`)
 message.channel.send({embed: gbed});
}).catch(error => {
    if (error) throw error;
});


}
module.exports.help = {
    name: "google"
}