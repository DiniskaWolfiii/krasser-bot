const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('knife')
		.setDescription('Wirf mit Messern nach Leuten. Hehe.')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User den du mit Messern bewerfen willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const knifeUser = interaction.options.getMember('user');

        if(knifeUser) {
            if(knifeUser.user.id === interaction.user.id) {
                let antworten = [
                    `*${interaction.user} sticht sich selbst mit einem Messer ab :knife:*`,
                    `*${interaction.user} lässt wirft ein Messer hoch und trifft sich selbst damit :knife:*`
                ]
                return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
            }
            let antworten = [
                `*${interaction.user} wirft ${knifeUser} mit einem Messer ab! :knife:*`,
                `*${interaction.user} wirft ${knifeUser} mit einem Messer ab! :knife:*`,
                `*${interaction.user} wirft ${knifeUser} mit einem Messer ab! :knife:*`,
                `*${interaction.user} wirft ${knifeUser} mit einem Messer ab und nagelt ${knifeUser} damit an die Wand! :knife:*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user} hält energisch ein Messer in der Hand :knife:*`,
            `*${interaction.user} hält energisch ein Messer in der Hand und beobachtet jemanden :eyes:*`
          ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};