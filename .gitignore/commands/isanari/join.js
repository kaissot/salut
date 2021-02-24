const { Command, CommandoMessage } = require("discord.js-commando");
const { UserNotInVoiceChannel } = require('../../strings.json')

module.exports = class Joincommand extends Command {
    constructor(client) {
        super(client, {
            name: 'join',
            group: 'isanari',
            memberName: 'join',
            description: 'Ajoute le bot dans le salon.'
        });
    }
    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query
     */
    async run(message) {
        
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.say(UserNotInVoiceChannel);
        }

        await voiceChannel.join();
        return message.say(":thumbsup: J'ai rejoind le salon" + "`" + voiceChannel.name + "`"); 
    }
}