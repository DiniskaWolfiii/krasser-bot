const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('night')
		.setDescription('Wünsch allen eine gute Nacht')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User dem du eine gute Nacht wünschen willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const milkUser = interaction.options.getMember('user');

        if(milkUser) {
            return await interaction.reply(`*${interaction.user} wünscht ${milkUser} eine gute Nacht! :zzz:*`);
        }
        await interaction.reply(`*${interaction.user} wünscht allen eine gute Nacht! :zzz:*`);
	},
};