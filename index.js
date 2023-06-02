const { createClient } = require('redis');

const client = createClient();


client.on('connect', ()=> {
    console.log("Connected!!!");
});

client.connect();

function insert(){
    client.hSet('user:001', {
        name: 'Mukul',
        surname: 'Kumar',
        company: 'NA',
        age: 23
    })
    client.hSet('user:002', {
        name: 'Abhi',
        surname: 'Smantaray',
        company: 'Semmai',
        age: 23
    })
}
insert();

async function getvalue(){
    let user1 = await client.hGetAll('user:001');
    let user2 = await client.hGetAll('user:002');

    console.log(JSON.stringify(user1, null, 2));
    console.log(JSON.stringify(user2, null, 2));

}

getvalue();


