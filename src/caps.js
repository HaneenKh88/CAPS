const events = require('../events');
require('../src/driver');

events.on('pickup' , (payload) => log('pickup' , payload));
events.on('transit' , (payload) => log('transit' , payload));
events.on('delivered' , (payload) => log('delivered' , payload));

function log(event, payload)
{
    console.log({event, time: new Date() , payload})
}
