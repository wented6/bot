const { Util } = require('discord.js');
const Discord = require('discord.js');
const fs = require('fs');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

const { TOKEN } = require('./config');

const prefixes = require("./jsons/prefixes.json");
const xp = require("./jsons/xp.json");
const credits = require("./jsons/credits.json");
const lvlmsg = require("./jsons/lvlmsg.json");
const cookies = require("./jsons/cookies.json");
const lvls = require("./jsons/guildlvl.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

let init = async () => {

const cmdFiles = await readdir("./commands/");
  console.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    let props = require(`./commands/${f}`);
    client.commands.set(props.help.name, props);
	client.aliases.set(props.help.alias, props);
  });
  console.log(`loaded ${client.aliases.size} aliases`);
}
init();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log(`Running ${client.user.username} on the following servers: \n\n${client.guilds.map(g => `${g.name} - ${g.memberCount} Members`).join(`\n`)}`));

  client.on('ready', () => {
	client.user.setActivity(`on ${client.guilds.array().length} servers with ${client.users.size} members`, { type: "PLAYING" });
    setTimeout(game2, 30000)
});

function game1() {
    client.user.setActivity(`on ${client.guilds.array().length} servers with ${client.users.size} members`, { type: "PLAYING" });
    setTimeout(game2, 30000)
}

function game2() {
    client.user.setActivity(`Want to know my prefix for a server?, use Nb.prefix to find out`, { type: "PLAYING" });
    setTimeout(game3, 30000)
}

function game3() {
   client.user.setActivity(`Want me on your discord server? Use Nb.invite`, { type: "PLAYING" });
    setTimeout(game4, 30000);
}
function game4() {
   client.user.setActivity(`My Master's orders`, { type: "LISTENING" });
    setTimeout(game5, 30000);
}
function game5() {
   client.user.setActivity(`in bed with mustache`, { type: "PLAYING" });
    setTimeout(game1, 30000);
}

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));

client.on('resume', () => console.log('I have reconnected!'));

client.on('message', async message => { 
	if (message.author.bot) return undefined;
	if (message.content.startsWith("Nb.") && message.channel.type !== "text")return mesage.reply("Please use my commands in a server");
	
    if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: "Nb."
    };
  }
  if(!credits[message.author.id]){
    credits[message.author.id] = {
      credits: 0
    };
  }
  if(!lvlmsg[message.guild.id]){
    lvlmsg[message.guild.id] = {
      lvlmsg: "congrats on the lvl up"
    };
  }
  if(!lvls[message.guild.id]){
    lvls[message.guild.id] = {
      lvls: "false"
    };
  }
  if(!cookies[message.author.id]){
    cookies[message.author.id] = {
      cookies: 0
    };
  }


  let coinAmt = Math.floor(Math.random() * 1) + 1;

  if(coinAmt === coinAmt){
    credits[message.author.id] = {
      credits: credits[message.author.id].credits + coinAmt
    };
  fs.writeFile("./jsons/credits.json", JSON.stringify(credits), (err) => {
    if (err) console.log(err)
  });
 }
 
  let xpAdd = Math.floor(Math.random() * 7) + 8;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  
  let levelmsg = lvlmsg[message.guild.id].lvlmsg;
  let cokis = cookies[message.author.id].cookies;
  
  if (lvls[message.guild.id].lvls === "true"){
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 800;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
	cookies[message.author.id].cookies = cokis + 2;
    message.channel.send(`${message.member.displayName}, ${levelmsg}`).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./jsons/xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  fs.writeFile("./jsons/cookies.json", JSON.stringify(cookies), (err) => {
    if(err) console.log(err)
  });
  }
  
  let prefix = prefixes[message.guild.id].prefixes;
  
  if (message.content.startsWith(prefix) && client.user.presence.status === "invisible"){
	  if (message.author.id !== '377271843502948354')return;
  }

  if (message.content == "Nb.prefix"){
	  message.delete(10000);
	  message.channel.send('The prefix for this server is: ``'+ prefix +'``').then(msg => {msg.delete(15000)});
  }
 
  if(!message.content.startsWith(prefix)) return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
 

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  let alias = client.aliases.get(cmd.slice(prefix.length));
  if(commandfile){
	  commandfile.run(client,message,args);
  }
  if(alias){
	  alias.run(client,message,args);
  }
});

client.login(TOKEN);
