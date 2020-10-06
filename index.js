const { config } = require('dotenv');
config({
    path: __dirname + "/.env"
});

const ms = require('ms');

const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

bot.login(process.env.TOKEN);

bot.on('ready', () => {
	var members = 0
	console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
	bot.guilds.cache.forEach(guild =>{
		console.log(` - Name: ${guild.name} ID: ${guild.id} Members: ${guild.members.cache.filter(member => !member.user.bot).size}`)
		members += guild.members.cache.filter(member => !member.user.bot).size;
	})
	console.log(`Total Members: ${members}`);
	bot.user.setActivity("UNO", {type: "PLAYING"});
})

bot.on('message', async message => {
    if(message.author.bot) return;

    let insults = ['Incompetent','Fool','Small PP','Retarded','Retard','Dipshit','Amateur','Anorak','Apefucker','Arse','Arse-licker','Arselicker','Arsebreath','Arsecunt','Arseface','Arsehole','Ass','Ass-kisser','Asskisser','Ass-nugget','Assnugget','Ass clown','Asscunt','Assface','Asshat','Asshole','Assmonkey','Assmunch','Assmunch','Assweed','Asswipe','Aunt fucker','Badgerfucker','Bag of dicks','Barbarian','Bastard','Beetlehead','Bell-end','Bellend','Bimbo','Birdbrain','Bitch','Bitchface','Bitchwad','Bitchzilla','Bonehead','Bootlicker','Boyfucker','Brotherfucker','Buffoon','Bum-fucker','Bumfucker','Bum chum','Buttfucker','Butthead','Butthole','Buttlicker','Chav','Chickenfucker','Childfucker','Chump','Cock','Cockboy','Cockfucker','Cockhead','Cockholster','Cockmaster','Cocksucker','Cockwomble','Cougar','Cousinfucker','Crack whore','Craphole','Creep','Cretin','Crook','Cumstain','Cunt','Cunt fart','Cuntass','Cuntbitch','Cuntlicker','Cuntsucker','Cuntzilla','Daughterfucker','Degenerate','Dick','Dick-licker','Dick licker','Dickbag','Dickbreath','Dickface','Dickfucker','Dickhead','Dicktard','Dimwit','Dirtbag','Dirthead','Dogfucker','Donkey','Donkeyfucker','Doofus','Douche','Douche bag','Douchebag','Douchefag','Douchelord','Drunkard','Duckfucker','Dumbass','Dumbo','Dunce','Earthworm','Edgelord','Egotist','Freak','Fuck noggin','Fuck nugget','Fuckbait','Fuckbucket','Fucker','Fuckhead','Fucklord','Fucktard','Fucktoy','Fuck you','Fuckweasel','Gawk','Geebag','Gobshite','Gold digger','Goon','Headass','Hillbilly','Hoe','Hooligan','Hooplehead','Horsefucker','Hosebag','Hypocrite','Idiot','Idot','Idiotist','Ignoramus','Imbecile','Inbred','Jackass','Jackwagon','Jerk','Junkie','Keyboard warrior','Kim Jong Un','Lamebrain','Landwhale','Low-life','Low life','Lunatic','Megabitch','Megadouche','Moron','Motherfucker','Nerd','Nimrod','Nitwit','Nonce','Pain in the ass','Pervert','Pigfucker','Pillock','Pinhead','Pissface','Porno fucker','Prick','Pussyfucker','Scumbag','Scumlord','Sheepfucker','Sheepshagger','Shit stain','Shitass','Shithead','Shitnugget','Shitweasel','Skullfucker','Skunkfucker','Slag','Slob','Snob','Son of a bitch','Son of a motherless goat','Son of a whore','Thundercunt','Trollface','Twat','Twatwaffle','Twerp','Twit','Unclefucker','Wankstain','Wank stain','Whoreson','Zounderkite','Fag','loser','screw','wanker','knob','you smell'];

    for (var i in insults){
        if(message.content.toLowerCase().includes(insults[i].toLowerCase()) && message.mentions.members.first()){
		    let ranNum = Math.floor(Math.random() * 4) + 1;
            if(ranNum == 1){
                message.channel.send({files: ["./images/blue.png"]});
            };
            if(ranNum == 2){
                message.channel.send({files: ["./images/green.png"]});
            };
            if(ranNum == 3){
                message.channel.send({files: ["./images/yellow.jpg"]});
            };
            if(ranNum == 4){
                message.channel.send({files: ["./images/red.png"]});
            };
        };
    };

    if(message.content.toLowerCase() === "?ping")
        message.reply(`Pong 🏓 \nBot Latency: ${message.createdTimestamp - message.createdTimestamp}ms`);

    if(message.content.toLowerCase() === "no u" || message.content.toLowerCase() === "no you" || message.content.toLowerCase() === "nou")
        message.reply("**No U**");

    if(message.content.toLowerCase() === "no me")
        message.reply("**Yes U**");
})
