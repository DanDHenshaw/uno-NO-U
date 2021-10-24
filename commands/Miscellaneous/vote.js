const { MessageEmbed } = require('discord.js');

module.exports = {
  category: 'Miscellaneous',
  description: 'Sends an embed for you to vote.',
  
  slash: 'both',
  testOnly: false,
  
  callback: ({ message, interaction, instance, guild }) => {
    const embed = new MessageEmbed()
    .setTitle(instance.messageHandler.getEmbed(guild, 'VOTE', 'TITLE'))
    .setColor('#FCCF02')
    .addField(`${instance.messageHandler.getEmbed(guild, 'VOTE', 'LINKS')}`, '[TownList](https://townlist.xyz/bot/549991531369594900/vote)\n[top.gg](https://top.gg/bot/549991531369594900/vote)\n[DiscordBotList](https://discordbotlist.com/bots/no-u/upvote)')

    return embed
  },
}