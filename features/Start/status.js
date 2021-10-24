module.exports = (client, instance) => {
    client.on('ready', () => {
      client.user.setActivity('UNO', {type: "PLAYING"});
      
        let statuses = [`in ${client.guilds.cache.size} servers!`, 'UNO', ]
      
      setInterval(function(){
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "PLAYING"});
      }, 5000);
    })
  }
  
  module.exports.config = {
    displayName: 'Status',
    
    dbName: 'STATUS'
  }