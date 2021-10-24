const DiscordJS = require('discord.js');
const { Intents } = DiscordJS
const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
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

client.login(process.env.TOKEN);

client.on('ready', () => {
	new WOKCommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
		featuresDir: path.join(__dirname, 'features'),
		messagesPath: path.join(__dirname, 'messages.json'),
		testServers: ['901526383396806717'],
		mongoUri: process.env.MongoDB,
		botOwner: ['143085134122450944']
  })
		.setDefaultPrefix('?')
		.setDisplayName('NoU Bot')
		.setColor('#FCCF02')
		.setCategorySettings([
			{
				name: 'Miscellaneous',
				emoji: '💡'
			},
		])
})