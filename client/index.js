'use strict'
//const {Client} = require('@xmpp/client')

//var name = $get('#fullname').text()
//console.log(name);



  const {xmpp, xml} =
    typeof require === 'undefined' ? window.xmpp : require('..') // For you; require('@xmpp/client')

//const {client} = xmpp()


const client = new Client()
//const xml = require('@xmpp/xml')
console.log("connectio restarting")
client.start('xmpp://localhost:5222').catch(err => {
    console.error('start failed', err)
})

client.handle('authenticate', authenticate => {
  return authenticate('gabbar', 'gabbar@123')
})

client.on('error', err => {
  console.error('❌', err.toString())
})

client.on('status', (status, value) => {
  console.log('🛈', status, value ? value.toString() : '')
})

client.on('online', jid => {
  console.log('🗸', 'online as', jid.toString())
  client.emit('stanza',{
	to:'admin@localhost',
	text:'hello how u doing ?'
});
  //client.emit(xml('message'))
})

client.on('stanza', stanza => {
  console.log('⮈', stanza.text);
})


 
//const xml = require('@xmpp/xml')


