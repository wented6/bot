const Discord = require("discord.js");
const kitsu = require('node-kitsu');

module.exports.run = async (client,message,args) => {
 const uwu = message.content.split(" ").slice(1).join(" ");

 kitsu.searchAnime(uwu, 0).then(results => {
	 if (results[0].attributes.abbreviatedTitles <= 0){
let anibd = new Discord.RichEmbed()
.setTitle(`Results for ${uwu}:`)
.setTimestamp()
.setThumbnail(`${results[0].attributes.posterImage.medium}`)
.setImage(`${results[0].attributes.coverImage.original}`)
.setColor(`${message.member.displayHexColor}`)
.setDescription(`Synopsis:\n\n${results[0].attributes.synopsis}`)
.addField('**Title(s):**', `${results[0].attributes.titles.en}\n${results[0].attributes.titles.en_jp}\n${results[0].attributes.titles.ja_jp}`, { inline: true })
.addField('**Status:**', `${results[0].attributes.status}`, { inline: true })
.addField('**Episode Count:**', `${results[0].attributes.episodeCount}`, { inline: true })
.addField('**Start Date:**', `${results[0].attributes.startDate}`, { inline: true })
.addField('**End Date:**', `${results[0].attributes.endDate}`, { inline: true })
.addField('**Average Rating:**', `${results[0].attributes.averageRating}, { inline: true }`)
.addField('**Age Rating:**', `${results[0].attributes.ageRating}`, { inline: true })
.addField('**Age Rating Guide:**', `${results[0].attributes.ageRatingGuide}`, { inline: true })
message.channel.send({embed: anibd});
	 } else {
		 let anibd = new Discord.RichEmbed()
.setTitle(`Results for ${uwu}:`)
.setTimestamp()
.setThumbnail(`${results[0].attributes.posterImage.medium}`)
.setImage(`${results[0].attributes.coverImage.original}`)
.setColor(`${message.member.displayHexColor}`)
.setDescription(`Synopsis:\n\n${results[0].attributes.synopsis}`)
.addField('**Title(s):**', `${results[0].attributes.titles.en}\n${results[0].attributes.titles.en_jp}\n${results[0].attributes.titles.ja_jp}`, { inline: true })
.addField('**English title:**', `${results[0].attributes.abbreviatedTitles}`, { inline: true })
.addField('**Status:**', `${results[0].attributes.status}`, { inline: true })
.addField('**Episode Count:**', `${results[0].attributes.episodeCount}`, { inline: true })
.addField('**Start Date:**', `${results[0].attributes.startDate}`, { inline: true })
.addField('**End Date:**', `${results[0].attributes.endDate}`, { inline: true })
.addField('**Average Rating:**', `${results[0].attributes.averageRating}`, { inline: true })
.addField('**Age Rating:**', `${results[0].attributes.ageRating}`, { inline: true })
.addField('**Age Rating Guide:**', `${results[0].attributes.ageRatingGuide}`, { inline: true })
message.channel.send({embed: anibd});
	 }
});   

 }
module.exports.help = {
    name: "anime"
}
