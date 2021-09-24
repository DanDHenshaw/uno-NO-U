const { config } = require('dotenv');
config({
    path: __dirname + "/.env"
});

const ms = require('ms');

const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

const Perspective = require('perspective-api-client');

bot.login(process.env.TOKEN);

bot.on('ready', () => {
	var members = 0
	console.log(`${bot.user.username} is online on ${bot.guilds.cache.size} servers!`);
	bot.guilds.cache.forEach(guild =>{
		console.log(` - Name: ${guild.name} ID: ${guild.id} Members: ${guild.members.cache.filter(member => !member.user.bot).size}`)
		members += guild.members.cache.filter(member => !member.user.bot).size;
	})
	console.log(`Total Members: ${members}`);
	bot.user.setActivity('UNO', {type: "PLAYING"});
	
    let statuses = [`in ${bot.guilds.cache.size} servers!`, 'UNO']
	
	setInterval(function(){
		let status = statuses[Math.floor(Math.random() * statuses.length)];
		bot.user.setActivity(status, {type: "PLAYING"});
	}, 5000);
})

bot.on('message', async message => {
    if(message.author.bot) return;

    if (message.mentions.members.first()) {
        const perspective = new Perspective({ apiKey: process.env.API });
        const result = await perspective.analyze(message.content);
        let obj = JSON.parse(JSON.stringify(result));
        console.log(JSON.stringify(result));
        console.log(obj.attributeScores.TOXICITY.summaryScore.value * 100);

        if (obj.attributeScores.TOXICITY.summaryScore.value * 100 > 80) {
            let ranNum = Math.floor(Math.random() * 4) + 1;
            if (ranNum == 1) {
                message.channel.send({ files: ["./images/blue.png"] });
            };
            if (ranNum == 2) {
                message.channel.send({ files: ["./images/green.png"] });
            };
            if (ranNum == 3) {
                message.channel.send({ files: ["./images/yellow.jpg"] });
            };
            if (ranNum == 4) {
                message.channel.send({ files: ["./images/red.png"] });
            };
        }
    };

    if(message.content.toLowerCase() === "?ping")
    	message.channel.send(`🏓 Pinging...`).then((msg) => msg.edit(`🏓 Pong\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms`))

    if(message.content.toLowerCase() === "no u" || message.content.toLowerCase() === "no you" || message.content.toLowerCase() === "nou")
        message.reply("**No U**");

    if(message.content.toLowerCase() === "no me")
        message.reply("**Yes U**");
})
