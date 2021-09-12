const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('slap')
		.setDescription('Klatsche andere User!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User dem du eine klatschen willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const slapUser = interaction.options.getMember('user');

        if(slapUser) {
            let antworten = [
                `*${interaction.user} klatscht ${slapUser}*`,
                `*${interaction.user} klatscht ${slapUser}*`,
                `*${interaction.user} klatscht ${slapUser}*`,
                `*${interaction.user} klatscht ${slapUser}*`,
                `*${interaction.user} klatscht ${slapUser}*`,
                `*${interaction.user} klatscht ${slapUser} auf den Ass*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user} hat das verlangen jemanden zu klatschen :clap:*`,
            `*${interaction.user} hebt die Hand und hat das Verlangen jemanden zu klatschen*`
          ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};