module.exports = {
    name: 'voiceStateUpdate',
    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').VoiceState} oldState
     * @param {import('discord.js').VoiceState} newState
     */
    execute(oldState, newState) {
        let joinToCreate = '882015730487398460';

        if (newState.channelId === joinToCreate && newState.channel.members.size !== 0) {

            newState.guild.channels.create(newState.member.user.username + "'s Voice", {
                type: 'GUILD_VOICE',
                parent: '882015433505513503',
                userLimit: 5,
                permissionOverwrites: [
                    {
                        id: newState.member.user.id,
                        allow: ['MANAGE_CHANNELS', 'MOVE_MEMBERS', 'MANAGE_ROLES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'PRIORITY_SPEAKER', 'CONNECT', 'VIEW_CHANNEL', 'SPEAK']
                    },
                    {
                        id: newState.member.guild.id,
                        deny: ['CONNECT'],
                        allow: ['VIEW_CHANNEL', 'SPEAK']
                    },
                ],
            })
                .then(newChannel => newState.setChannel(newChannel));

        } else if (!newState.channelId) {
            if(oldState.channelId === '882015730487398460' || oldState.channelId === '882015782031228938') return;
            if (oldState.channel.parentId === '882015433505513503' && oldState.channel.members.size === 0) return oldState.channel.delete();
        }
    }
}