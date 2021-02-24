const { Command, CommandoMessage } = require("discord.js-commando");
const { StreamDispatcher} = require('discord.js');

module.exports = class Pausecommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pause',
            group: 'isanari',
            memberName: 'pause',
            description: 'Met en pause la musique en actuelle.'
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
            return message.say(' :x: Tu dois etre dans un salon vocal pour pouvoir utiliser cette commande');
        }

        if (!message.client.voice.connections.first()) {
            return message.say (":x: Je ne suis pas connecté à un vocal. Tape `join` pour m'ajouter ");
        }

        if (dispatcher) {
            dispatcher.pause();
        }

        return message.say(":pause_button: Pause :thumbsup:"); 
    }
}