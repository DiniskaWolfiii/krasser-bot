module.exports = {
    name: 'messageCreate',
/**
 * @param {import('discord.js').Message} message
 */
    execute (message) {
        // Halloween Event
        if(message.channel.id === '841784868270506007') return message.member.roles.add('886699740572565575', 'Teilgenommen am Halloween Event');
    }
}