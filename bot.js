const { Util } = require("discord.js");
const Discord = require('discord.js');
const fs = require('fs');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

const { TOKEN, GOOGLE_API_KEY } = require('./config');

const prefixes = require("./jsons/prefixes.json");
const xp = require("./jsons/xp.json");
const credits = require("./jsons/credits.json");
const lvlmsg = require("./jsons/lvlmsg.json");
const cookies = require("./jsons/cookies.json");
const lvls = require("./jsons/guildlvl.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

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
  
	if(lvls[message.guild.id].lvls === "true"){
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
  
  if(message.content.startsWith(prefix) && client.user.presence.status === "invisible"){
	  if(message.author.id !== '377271843502948354')return;
  }

  if (message.content == "Nb.prefix"){
	  message.delete(10000);
	  message.channel.send('The prefix for this server is: ``'+ prefix +'``').then(msg => {msg.delete(15000)});
  }
  
  if(!message.content.startsWith(prefix)) return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  const searchString = message.content.split(" ").slice(1).join(" ");
  const url = message.content.split(" ").slice(1).join(" ");
  const serverQueue = queue.get(message.guild.id);
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  
  
  if (command === `play`) {
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, message, voiceChannel, true); 
			}
			message.channel.send(`Playlist: **${playlist.title}** has been added to the queue!`).then(msg=>{msg.delete(30000)});
	    message.delete(30000)	
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					let bed = new Discord.RichEmbed()
					.setTitle(`Song selection:`)
					.setColor(`${message.member.displayHexColor}`)
					.setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
					.setFooter(`Please provide a value from 1-10.`, `${message.author.avatarURL}`)
					message.channel.send({embed: bed}).then(msg => {msg.delete(30000)});
					message.delete(30000);
					try {
						var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 20000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('No or invalid value entered, cancelling video selection.').then(msg=>{msg.delete(10000)});
					}
					response.first().delete(20000);
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send('I could not obtain any search results.').then(msg=>{msg.delete(10000)});
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!').then(msg=>{msg.delete(10000)});
		if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.').then(msg=>{msg.delete(10000)});
		serverQueue.connection.dispatcher.end('skip');
		message.channel.send('Skip command has been used').then(msg=>{msg.delete(10000)});
		message.delete(10000);
		return undefined;
} else if (command === `stop`) {
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!').then(msg=>{msg.delete(10000)});
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.').then(msg=>{msg.delete(10000)});
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('stop');
		message.channel.send('Stop command has been used!').then(msg=>{msg.delete(10000)});
		message.delete(10000);
		return undefined;
	} else if (command === `volume`) {
		const uwu = message.content.split(" ").slice(1).join(" ");
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!').then(msg=>{msg.delete(10000)});
		if (!serverQueue)return message.channel.send('There is nothing playing.').then(msg=>{msg.delete(10000)});
		if (!uwu){
		message.channel.send(`The current volume is: **${serverQueue.volume}**`).then(msg=>{msg.delete(10000)});
		message.delete(10000);
		}
		if (uwu){
		serverQueue.volume = uwu;
		serverQueue.connection.dispatcher.setVolumeLogarithmic(uwu / 5);
		message.channel.send(`I set the volume to: **${uwu}**`).then(msg=>{msg.delete(10000)});
		message.delete(10000);
		}
	} else if (command === `np`) {
	const parseTime = function(milliseconds) {
    var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
    var minutes = Math.floor(seconds/60); seconds %= 60;
    var hours = Math.floor(minutes/60); minutes %= 60;
    var days = Math.floor(hours/24); hours %= 24;
    var written = false;
    return(days?(written=true,days+" days"):"")+(written?", ":"")
      +(hours?(written=true,hours+" hour(s)"):"")+(written?", ":"")
      +(minutes?(written=true,minutes+" minutes"):"")+(written?", ":"")
      +(seconds?(written=true,seconds+" seconds"):"")+(written?" ":"");
};
let elapsd = parseTime(`${serverQueue.connection.dispatcher.totalStreamTime}`);
		let embed = new Discord.RichEmbed()
		.setColor(`${message.member.displayHexColor}`)
		.setFooter(`Elapsed time: ${elapsd}`, `${message.author.avatarURL}`)
		.addField("**Now Playing:**", `${serverQueue.songs[0].title}`)
		message.channel.send({embed}).then(msg=>{msg.delete(15000)});
		message.delete(10000);
	} else if (command === `queue`) {
		let i = 0;
		if(i == "1") i = i.repalce("1", "NP");
		let embed = new Discord.RichEmbed()
		.setColor(`${message.member.displayHexColor}`)
		.addField('**Song Queue:**', `${serverQueue.songs.map(song => `**[${++i}]** ${song.title}`).slice(0, 20).join('\n')}`)
		message.channel.send(embed).then(msg=>{msg.delete(30000)});
		message.delete(20000);
  } else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			message.channel.send('I Paused the music for you').then(msg=>{msg.delete(10000)});
			message.delete(10000);
		} else {
		message.channel.send('There is nothing playing.').then(msg=>{msg.delete(10000)});
		message.delete(10000);
		}
	} else if (command === `resume`) {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			message.channel.send("i've resumed the music").then(msg=>{msg.delete(10000)});
			message.delete(10000);
		} else {
		message.channel.send('There is nothing playing.').then(msg=>{msg.delete(10000)});
		message.delete(10000);
	}
}
	
async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.get(message.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(video);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel:\nERROR:\n${error}`).then(msg => {msg.delete(15000)});
		}
	} else {
		serverQueue.songs.push(song);
		if (playlist)return;
		else return message.channel.send(` **${song.title}** has been added to the queue!`).then(msg => {msg.delete(30000)});
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url), { audioonly: true })
		.on('end', reason => {
			if(reason == 'skip'||'stop')return;
			message.channel.send('Song ended').then(msg => {msg.delete(30000)});
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`Started playing: **${song.title}**`).then(msg => {msg.delete(30000)});
}
 

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
