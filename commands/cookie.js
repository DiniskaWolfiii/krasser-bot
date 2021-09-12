const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('cookie')
		.setDescription('Iss oder gib jemand anderen einen Keks!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User dem du ein Keks geben willst!')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const cookieUser = interaction.options.getUser('user');

        if(cookieUser) {
            return await interaction.reply(`*${interaction.user} gibt ${cookieUser} ein Keks :cookie:*`);
        }
        await interaction.reply(`*${interaction.user} isst genüsslich einen Keks :cookie:*`);
	},
};