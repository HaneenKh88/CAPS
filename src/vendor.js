const events = require('../events');
let faker = require('faker');
require('../src/caps');
require('../src/driver');

setInterval(() =>
{
    let store = {
        StoreName: `${faker.company.companyName()}`,
        orderID: `${faker.random.uuid()}`,
        customerName: `${faker.name.findName()}`,
        address: `${faker.address.country()}`

    };

     events.emit('pickup' , store)
}, 5000);


events.on('delivered' , (payload) => setTimeout(() => {
    console.log(`VENDOR: Thank you`);
}, 7000));