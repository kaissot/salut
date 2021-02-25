const {VoiceConnection} = require('discord.js');
const { Command, CommandoMessage } = require("discord.js-commando");
const { UserNotInVoiceChannel } = require('../../strings.json')
const {key} = require('../../config.json');

const ytdl = require('ytdl-core');
const ytsr = require('youtube-search');

module.exports = {
    name : 'search',
    memberName: 'search',
    aliases: ['sr'],
    group: 'isanari',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Tu n'es pas dans un salon vocal !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Tu n'es pas dans le même salon vocal`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Indique le nom de la chanson !`);

        client.player.play(message, args.join(" "));
    },
};