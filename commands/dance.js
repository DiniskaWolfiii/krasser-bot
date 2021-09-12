const { SlashCommandBuilder } = require('@discordjs/builders');
const { Options } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('dance')
		.setDescription('Tanze alleine oder mit anderen!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User mit dem du tanzen willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const danceUser = interaction.options.getUser('user');

        if(danceUser) return await interaction.reply(`*${interaction.user} tanzt mit ${danceUser}*`);
        await interaction.reply(`*${interaction.user} tanzt alleine rum... Das sieht merkwürdig aus...*`)
	},
};