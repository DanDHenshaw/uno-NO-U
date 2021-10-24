module.exports = (client, instance) => {
    client.on('messageCreate', async message => {
      if (message.author.bot) return;
    
      if(message.content.toLowerCase() === "no u" || message.content.toLowerCase() === "no you" || message.content.toLowerCase() === "nou")
        message.reply("**No U**");
  
      if(message.content.toLowerCase() === "no me")
        message.reply("**Yes U**");
  
      if(message.content.toLowerCase() === "yes u" || message.content.toLowerCase() === "yes you")
        message.reply("**No U**");
    })
  }
  
  module.exports.config = {
    displayName: 'Uno Reply',
    
    dbName: 'UNOREPLY'
  }