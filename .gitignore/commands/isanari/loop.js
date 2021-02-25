const {VoiceConnection} = require('discord.js');
const { Command, CommandoMessage } = require("discord.js-commando");
const { UserNotInVoiceChannel } = require('../../strings.json')
const {key} = require('../../config.json');

const ytdl = require('ytdl-core');
const ytsr = require('youtube-search');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    group: 'isanari',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'es pas dans un saln vocal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'es pas dans le même salon vocal !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Pas de musique en cours !`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - Mode répétition **désactivé** !`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Mode répétition **activé** La file complète va être répétée sans fin !`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - Mode répétition **désactivé** !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Mode répétition **activé** La musique actuelle va être répétée indéfiniment !`);
            };
        };
    },
};