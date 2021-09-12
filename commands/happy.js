const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('happy')
		.setDescription('Zeig deine Glücklichkeit!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User dem du gute Laune verteilen willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const goodUser = interaction.options.getMember('user');

        if(goodUser) {
            if(goodUser.user.id === interaction.user.id) {
                let antworten = [
                    `*${interaction.user} hat niemand der gute Laune will und gibt sich selber gute Laune!*`,
                    `*${interaction.user} hat niemand der gute Laune will und gibt sich selber gute Laune!*`
                ]
                return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
            }
            let antworten = [
                `*${interaction.user} verteilt gute Laune an ${goodUser}!*`,
                `*${interaction.user} verteilt gute Laune an ${goodUser}!*`,
                `*${interaction.user} verteilt gute Laune an ${goodUser}!*`,
                `*${interaction.user} verteilt gute Laune an ${goodUser}!*`,
                `*${interaction.user} verteilt gute Laune an ${goodUser}!*`,
                `*${interaction.user} verteilt gute Laune an ${goodUser}!*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user} ist total happy!*`,
            `*${interaction.user} ist absolut mega super duper happy!`,
            `*${interaction.user} ist total happy!*`,
            `*${interaction.user} ist mega gut gelaunt! Weiter so!*`,
        ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};