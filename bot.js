const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Ich bin bereit!');
    console.log('by PiBot Developers');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// BOT TOKEN

client.login(process.env.BOT_TOKEN);//BOT_TOKEN 
