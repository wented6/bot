const Discord = require("discord.js");
const fs = require("fs");
let credits = require("../jsons/credits.json");
let shop = require("../jsons/shop.json");
let inventory = require("../jsons/inventory.json");
                 
module.exports.run = async (client,message, args) => {
	
	if(!credits[message.author.id]){
    credits[message.author.id] = {
      credits: 0
    };
  }
  
 const cred = credits[message.author.id].credits;
 const inv = inventory[message.author.id].inventory;
  
  let categories = []; // Lets define categories as an empty array so we can add to it.

        // We want to make it so that if the item is not specified it shows a list of items
        if (!args.join(" ")) { // Run if no item specified...

            // First, we need to fetch all of the categories.
            for (var i in shop) { // We can do this by creating a for loop.

                // Then, lets push the category to the array if it's not already in it.
                if (!categories.includes(shop[i].type)) {
                    categories.push(shop[i].type)
                }

            }

            // Now that we have the categories we can start the embed
            const embed = new Discord.RichEmbed()
                .setDescription(`Available Items`)
                .setColor(`${message.member.displayHexColor}`)

            for (var i = 0; i < categories.length; i++) { // This runs off of how many categories there are. - MAKE SURE YOU DELETE THAT = IF YOU ADDED IT.

                var tempDesc = '';

                for (var c in shop) { // This runs off of all commands
                    if (categories[i] === shop[c].type) {

                        tempDesc += `${shop[c].pic} ${shop[c].name} - $${shop[c].price} - ${shop[c].desc}\n`; // Remember that \n means newline

                    }

                }

                // Then after it adds all the items from that category, add it to the embed
                embed.addField(categories[i], tempDesc);

            }

            // Lets test it! x2

        }
	
	// Buying the item.

        // Item Info
        let itemName = '';
        let itemPrice = 0;
        let itemDesc = '';
		let itemPic = '';

        for (var i in shop) { // Make sure you have the correct syntax for this.
            if (args.join(" ").trim().toUpperCase() === shop[i].name.toUpperCase()) { // If item is found, run this...
                itemName = shop[i].name;
                itemPrice = shop[i].price;
                itemDesc = shop[i].desc;
				itemPic = shop[i].pic;
            }
        }

        // If the item wasn't found, itemName won't be defined
        if (itemName === '') {
            return message.channel.send(`Item **"${args.join(" ").trim()}"** not found.`)
        }

        // Now, lets check if they have enough money.
        if (cred < itemPrice)return message.channel.send(`You don't have enough money for this item.`);

		let num = Math.floor(Math.random() * 1) + 1
		
		//check if they have inventory
  if(!inventory[message.author.id])return message.channel.send('You have nothing to sell');
  if(inventory[message.author.id]){
    inventory[message.author.id] = {
      inventory: inv - (`${itemPic}x1`)
    };
  }
		//check for credits and take the item price
	credits[message.author.id] = {
	credits: cred + parseInt(`${itemPrice}`)
	};
	
	        //write to the .json file
           fs.writeFile("./jsons/inventory.json", JSON.stringify(inventory), (err) => {
    if (err) console.log(err)
  });
				
		message.channel.send(`You sold a ${itemName} for $${itemPrice}`);
	
	
}
module.exports.help = {
	name: "sell"
}