module.exports = {
    name: 'voiceStateUpdate',
    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').VoiceState} oldState
     * @param {import('discord.js').VoiceState} newState
     */
    execute(oldState, newState) {
        let serverId
        if(newState.channel) serverId = newState.channel.guildId;
        else serverId = oldState.channel.guildId;

        if (serverId === '565879649175994368') {
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
                            allow: ['VIEW_CHANNEL', 'SPEAK', 'CONNECT']
                        },
                    ],
                    position: 3,
                })
                    .then(newChannel => newState.setChannel(newChannel));
                return;
            }
            if (oldState.channelId === '693231709407150121' || oldState.channelId === '882015730487398460' || oldState.channelId === '882015782031228938') return;
            if (oldState.channel.parentId === '882015433505513503' && oldState.channel.members.size === 0) return oldState.channel.delete();

        } else if (serverId === '297425051639349249') {
            let joinToCreate = '941422962056265748';

            if (newState.channelId === joinToCreate && newState.channel.members.size !== 0) {

                newState.guild.channels.create(newState.member.user.username + "'s Voice", {
                    type: 'GUILD_VOICE',
                    parent: '941422858607931442',
                    userLimit: 5,
                    permissionOverwrites: [
                        {
                            id: newState.member.user.id,
                            allow: ['MANAGE_CHANNELS', 'MOVE_MEMBERS', 'MANAGE_ROLES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'PRIORITY_SPEAKER', 'CONNECT', 'VIEW_CHANNEL', 'SPEAK']
                        },
                        {
                            id: newState.member.guild.id,
                            allow: ['VIEW_CHANNEL', 'SPEAK', 'CONNECT']
                        },
                    ],
                    position: 2,
                })
                    .then(newChannel => newState.setChannel(newChannel));
                return;
            }
            if (oldState.channelId === '941422962056265748') return;
            if (oldState.channel.parentId === '941422858607931442' && oldState.channel.members.size === 0) return oldState.channel.delete();
        }
    }
}
