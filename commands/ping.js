var main = require('../index')
var client = main.client;

module.exports = {
  category: 'Miscellaneous',
  description: 'Replies with pong',
  
  slash: 'both',
  testOnly: false,
  
  callback: ({ message, interaction }) => {
    return `🏓 Pong\nLatency is ${Math.round(client.ws.ping)}ms`
  },
}