const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('pizza')
		.setDescription('Iss ein Stück Pizza')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User dem du Pizza geben willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const pizzaUser = interaction.options.getMember('user');

        if(pizzaUser) {
            let antworten = [
                `*${interaction.user} gibt ${pizzaUser} ein Stück Pizza :pizza:*`,
                `*${interaction.user} gibt ${pizzaUser} ein Stück Pizza :pizza:*`,
                `*${interaction.user} brät ${pizzaUser} eine mit einem Stück Pizza drüber :pizza:*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        await interaction.reply(`*${interaction.user} frisst Pizza, gibt aber niemandem ein Stück davon ab! :pizza:*`)
	},
};