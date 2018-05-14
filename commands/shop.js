const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {

    var shopbd = new Discord.RichEmbed()
    .setTimestamp()
    .setTitle(`Shop for ${client.user.username}`)
    .addField('**Food:**','`cake` `cookie` `apple` `greenapple` `banana` `pizza` `taco` `burger` `chicken` `ramen` `udon` `dongo` `popcorn` `icecream` `chocolate` `riceball` `sushi`')
    .addField('**Drinks:**', '`beer` `whine` `cocktail` `champagne` `sake` `tea` `coffee` `whisky` `milk`')
    .addField('**Flowers:**', '`Rose` `hibiscus` `sunflower` `tulip` `sakura` `bouquet`')
    .addField('**Items:**', '`moneybag` `daimond` `gun` `pickaxe` `key`')
    message.channel.send(shopbd);

}
module.exports.help = {
    name: "shop"
}