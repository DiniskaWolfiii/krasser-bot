const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('goodvibes')
		.setDescription('Verteile Gute Laune!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User dem du good vibes verteilen willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const goodvibeUser = interaction.options.getMember('user');

        if(goodvibeUser) {
            if(goodvibeUser.user.id === interaction.user.id) {
                let antworten = [
                    `*${interaction.user} hat niemand der Good Vibes will und gibt sich selber gute Laune!*`,
                    `*${interaction.user} hat niemand der Good Vibes will und gibt sich selber gute Laune!*`
                ]
                return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
            }
            let antworten = [
                `*${interaction.user} verteilt Good Vibes an ${goodvibeUser}!*`,
                `*${interaction.user} verteilt Good Vibes an ${goodvibeUser}!*`,
                `*${interaction.user} verteilt Good Vibes an ${goodvibeUser}!*`,
                `*${interaction.user} verteilt Good Vibes an ${goodvibeUser}!*`,
                `*${interaction.user} verteilt Good Vibes an ${goodvibeUser}!*`,
                `*${interaction.user} verteilt Good Vibes an ${goodvibeUser}!*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user} verteilt Good Vibes!!!*`,
            `*${interaction.user} verteilt Good Vibes!!!*`,
            `*${interaction.user} sprüht voller Good Vibes!!!*`,
            `*${interaction.user} ist umgeben von Lauter Good Vibes!!*`
        ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};