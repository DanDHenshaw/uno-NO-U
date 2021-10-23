const { MessageEmbed } = require('discord.js');

module.exports = {
  category: 'Miscellaneous',
  description: 'Sends an embed for you to vote.',
  
  slash: 'both',
  testOnly: false,
  
  callback: ({ message, interaction }) => {
    const embed = new MessageEmbed()
    .setTitle('Vote For Us!')
    .setColor('#FCCF02')
    .addField('Links:', '[TownList](https://townlist.xyz/bot/549991531369594900/vote)\n[top.gg](https://top.gg/bot/549991531369594900/vote)\n[DiscordBotList](https://discordbotlist.com/bots/no-u/upvote)')

    return embed
  },
}