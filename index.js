const DiscordJS = require('discord.js');
const { Intents } = DiscordJS
const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ],
  disableEveryone: true
});
exports.client = client

const WOKCommands = require('wokcommands');

const path = require('path')

const { config } = require('dotenv');
config({
  path: __dirname + "/.env"
});

const ms = require('ms');

const Perspective = require('perspective-api-client');

const dtl = require("api-townlist-xyz");
const { features } = require('process');
const dbl = new dtl(process.env.DTL_TOKEN, client);

client.login(process.env.TOKEN);

client.on('ready', () => {
  dbl.serverCount();
	
	console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers!`);
	client.guilds.cache.forEach(guild =>{
		console.log(` - Name: ${guild.name} ID: ${guild.id}`)
	})
	client.user.setActivity('UNO', {type: "PLAYING"});
	
    let statuses = [`in ${client.guilds.cache.size} servers!`, 'UNO']
	
	setInterval(function(){
		let status = statuses[Math.floor(Math.random() * statuses.length)];
		client.user.setActivity(status, {type: "PLAYING"});
	}, 5000);

	new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
		testServers: ['901526383396806717'],
		setDefaultPrefix: '?',
  })
})

client.on('messageCreate', async message => {
	if (message.author.bot) return;

	if (message.mentions.members.first()) {
		const perspective = new Perspective({ apiKey: process.env.API });
		const result = await perspective.analyze(message.content);
		let obj = JSON.parse(JSON.stringify(result));
		console.log(JSON.stringify(result));
		console.log(obj.attributeScores.TOXICITY.summaryScore.value * 100);

		if (obj.attributeScores.TOXICITY.summaryScore.value * 100 > 80) {
			let ranNum = Math.floor(Math.random() * 4) + 1;
			if (ranNum == 1) {
				message.reply({ files: ["./images/blue.png"] });
			};
			if (ranNum == 2) {
				message.reply({ files: ["./images/green.png"] });
			};
			if (ranNum == 3) {
				message.reply({ files: ["./images/yellow.jpg"] });
			};
			if (ranNum == 4) {
				message.reply({ files: ["./images/red.png"] });
			};
		}
	};

	if(message.content.toLowerCase() === "no u" || message.content.toLowerCase() === "no you" || message.content.toLowerCase() === "nou")
		message.reply("**No U**");

	if(message.content.toLowerCase() === "no me")
		message.reply("**Yes U**");

	if(message.content.toLowerCase() === "yes u" || message.content.toLowerCase() === "yes you")
		message.reply("**No U**");
})