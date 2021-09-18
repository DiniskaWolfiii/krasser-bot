module.exports = {
    name: 'guildMemberAdd',
    /**
     * @param {import('discord.js').GuildMember} newMember
     */
    execute(newMember) {
        const Discord = require('discord.js');
        let newUser = newMember.user.username;
        let welcomeMessages = [
            `WOOOP WOOOOP BITCHES! Die Party kann steigen! ${newUser} is hier!`,
            `Ach nur ${newUser} ist es, niemand wichtiges.`,
            `Macht den Landeplatz für ${newUser} frei, denn ${newUser} landet in T-10, 9, 8........ Zu langsam... JETZT!!! :rocket:`,
            `Willkommen ${newUser}. Bitte halte dich an den Hygienemaßnahmen, trage deine Mund-Nasen-Bedeckung im gesamten Server und halte den Mindestabstand von 27 Metern ein. Vielen Dank!`
        ]

        let randomNumber = Math.floor(Math.random() * welcomeMessages.length);

        let welcomeEmbed = new Discord.MessageEmbed()
            .setColor('#00FF00')
            .setThumbnail(newMember.user.displayAvatarURL())
            .setTitle('Neuer Krasser Dude ist dazu gekommen!')
            .setDescription(welcomeMessages[randomNumber]);

        
        switch (newMember.guild.id) {
            case '565879649175994368':
                let krasserChannel = newMember.guild.channels.cache.find(c => c.id === '692636574831214623');
                krasserChannel.send({embeds: [welcomeEmbed]});
                newMember.roles.add(['692435890454397059', '692482394455933008', '692482666469261403', '693595225129484289', '775417214400200734'], "Auto Role Join")
                break;
        }
    }
}