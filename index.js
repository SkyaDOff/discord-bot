const Discord = require('discord.js');

const { prefix, token } = require('./config.json')

const client = new Discord.Client();

client.once('Ready', () => {
    console.log('Ready!');
});

client.on('message', (message) => {
    if (message.content === `${prefix}p`) {
        message.channel.send('Tu viens de prendre ta prise de service.');
    }
});

client.on('message', (message) => {
    if (message.content === `${prefix}f`) {
        message.channel.send('Tu viens de prendre ta fin de service.');
    }
});

client.login(process.env.TOKEN);