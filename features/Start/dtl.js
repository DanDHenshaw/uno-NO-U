var main = require('../../index')
var client = main.client;

const dtl = require("api-townlist-xyz");
const dbl = new dtl(process.env.DTL_TOKEN, client);

module.exports = (client, instance) => {
  client.on('ready', () => {
    dbl.serverCount();
  })
}

module.exports.config = {
  displayName: 'DTL',
  
  dbName: 'DTL'
}