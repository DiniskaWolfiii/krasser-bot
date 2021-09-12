const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('stab')
		.setDescription('Stech andere User ab')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User den du abstechen willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const stabUser = interaction.options.getMember('user');

        if(stabUser) {

            let antworten = [
                `*${interaction.user} sticht ${stabUser} ab :knife:*`,
                `*${interaction.user} sticht ${stabUser} ab :knife:*`,
                `*${interaction.user} sticht ${stabUser} ab :knife:*`,
                `*${interaction.user} sticht ${stabUser} ab :knife:*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
          `*${interaction.user} hat das Verlangen jemand abzustechen :knife:*`,
          `*${interaction.user} hebt ein Messer hervor :knife:*`
        ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};