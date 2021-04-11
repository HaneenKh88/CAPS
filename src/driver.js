const events = require('../events');

require('../src/caps')
require('../src/vendor')

setTimeout(() =>
{
    events.on('pickup' , (payload) =>
    {
        console.log(`DRIVER: picked up${payload.orderID}`)
        events.emit('in-transit', payload);
    })
}, 1000)


setTimeout(() =>
{
    events.on('pickup' , (payload) =>
    {
        console.log(`delivered up ${payload.orderID}`)
        events.emit('delivered', payload);
        console.log(`Thank you for delivering ${payload.orderID} `)
    })
}, 3000)