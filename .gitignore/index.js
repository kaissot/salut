const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient ({
    commandPrefix: '-',
    owner: '341312087278092299',
    invite: 'https://discord.gg/nam5dnHm72'

});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup('isanari' , 'Isanari')
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.server = {
    queue: [],
    currentVideo: { url : "" , title : "Rien pour le moment."},
    dispatcher: null,
    connection: null
};

client.once('ready', () => {
    console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
});

client.on('error', (error) => console.error(error));

client.login(process.env.TOKEN);