const {Client} = require('@xmpp/client')

const client = new Client()

client.start('xmpp://localhost:5222').catch(err => {
    console.error('start failed', err)
})

client.on('error', err => {
  console.error('❌', err.toString())
})

client.on('status', (status, value) => {
  console.log('🛈', status, value ? value.toString() : '')
})

client.on('online', jid => {
  console.log('🗸', 'online as', jid.toString())
})

client.on('stanza', function(stanza){
    console.log(stanza);
})

client.handle('authenticate', authenticate => {
  return authenticate('admin', 'root')
})