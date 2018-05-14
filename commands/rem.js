const Discord = require("discord.js");
const { get } = require("snekfetch");

module.exports.run = async (client, message, args) => {

 const { body } = await get("https://rra.ram.moe/i/r?type=rem");
        await message.channel.send({
            embed: {
                "title": "here's a pic of rem:",
                "color": 0x0fff00,
                "image": {
                    "url": `https://cdn.ram.moe/${body.path.replace("/i/", "")}`
                }
            }
        });

};
module.exports.help = {
	name: "rem"
}