const { Command, CommandoMessage } = require("discord.js-commando");
const { StreamDispatcher} = require('discord.js');
const { UserNotInVoiceChannel } = require('../../strings.json');
const { BotNotInVoiceChannel } = require('../../strings.json')

module.exports = class Resumecommand extends Command {
    constructor(client) {
        super(client, {
            name: 'resume',
            group: 'isanari',
            memberName: 'resume',
            description: 'Reprend la musique actuellement en pause.'
        });
    }
    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query
     */
    async run(message) {
        /**
         * @type StreamDispatcher
         */
        const dispatcher = message.client.server.dispatcher;
        
        if (!message.member.voice.channel) {
            return message.say(UserNotInVoiceChannel);
        }

        if (!message.client.voice.connections.first()) {
            return message.say (BotNotInVoiceChannel);
        }

        if (dispatcher) {
            dispatcher.resume();
        }

        return message.say("En train de jouer :notes:"); 
    }
}