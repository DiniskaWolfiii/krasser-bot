module.exports = {
    name: 'messageCreate',
/**
 * @param {import('discord.js').Message} message
 */
    execute (message) {
        // Halloween Event
        if(message.channel.id === '897435307996221440') return message.member.roles.add('897434883268431912', 'Teilgenommen am Halloween Event');
    }
}