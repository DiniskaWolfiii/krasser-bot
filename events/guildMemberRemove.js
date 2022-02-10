module.exports = {
    name: 'guildMemberRemove',
    /**
     * @param {import('discord.js').GuildMember} newMember
     */
    execute(oldMember) {
        const Discord = require('discord.js');
        const userName = oldMember.user.username;
        let byeMessages = [
            `${userName} hat diesen Server verlassen :(`,
            `Die Treulose Tomate ${userName} hat uns verlassen! DIE SAU`,
            `${userName} hat sich aus dem Server GEYEETED`,
            `${userName} hat Corona und muss in Quarantäne!`
        ]
        let randomNumber = Math.floor(Math.random() * byeMessages.length);
    
        let byeEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setThumbnail(oldMember.user.displayAvatarURL())
            .setTitle('Krasser Dude hat den Server verlassen!')
            .setDescription(byeMessages[randomNumber]);
    
            switch (oldMember.guild.id) {
                case '565879649175994368':
                    let krasserChannel = oldMember.guild.channels.cache.find(c => c.id === '692636574831214623');
                    krasserChannel.send({embeds: [byeEmbed]});
                    break;
            }
    }
}