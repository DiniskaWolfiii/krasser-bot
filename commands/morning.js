const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('morning')
		.setDescription('Wünsch allen einen Guten Morgen!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User dem du einen guten Morgen wünschen willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const goodMorningUser = interaction.options.getMember('user');

        if(goodMorningUser) {
            return await interaction.reply(`*${interaction.user} wünscht ${goodMorningUser} einen guten Morgen!*`);
        }
        await interaction.reply(`*${interaction.user} wünscht allen einen guten Morgen!*`);
	},
};