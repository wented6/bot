const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	
	message.channel.send(`spam?? oki ... i'll spam this channel in 10 seconds`);
    setTimeout(game1, 10000)

function game1() {
    message.channel.send(`spam1`);
    setTimeout(game2, 2000)
}

function game2() {
    message.channel.send(`spam2`);
    setTimeout(game1, 2000)
}

}
module.exports.help = {
    name: "spam"
}
