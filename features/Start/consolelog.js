var main = require('../../index')
var client = main.client;

module.exports = (client, instance) => {
  console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers!`);
  client.guilds.cache.forEach(guild =>{
  console.log(` - Name: ${guild.name} ID: ${guild.id}`)
})
}

module.exports.config = {
  displayName: 'Console Log',
  
  dbName: 'CONSOLELOG'
}