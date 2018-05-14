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
  if(!inventory[message.author.id]){
    inventory[message.author.id] = {
      inventory: ""
    };
  }
  
 const cred = credits[message.author.id].credits;
 const inv = inventory[message.author.id].inventory;
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

		//check if they have inventory
  if(!inventory[message.author.id].inventory){
  inventory[message.author.id].inventory = + 1
    };
  if(inventory[message.author.id].inventory){
  inventory[message.author.id].inventory = + 1
    };
		//check for credits and take the item price
	credits[message.author.id] = {
	credits: cred - parseInt(`${itemPrice}`)
	};
	
	        //write to the .json file
fs.writeFile("./jsons/inventory.json", JSON.stringify(`${itemName}`), (err) => {
    if (err) console.log(err)
  });
				
		message.channel.send(`You bought a ${itemName} for $${itemPrice}`);
	
	
}
module.exports.help = {
	name: "buy",
	type: "Currency"
}