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
                `*${interactiob.user} klatscht ${slapUser}*`,
                `*${interactiob.user} klatscht ${slapUser}*`,
                `*${interactiob.user} klatscht ${slapUser}*`,
                `*${interactiob.user} klatscht ${slapUser}*`,
                `*${interactiob.user} klatscht ${slapUser}*`,
                `*${interactiob.user} klatscht ${slapUser} auf den Ass*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interactiob.user} hat das verlangen jemanden zu klatschen :clap:*`,
            `*${interactiob.user} hebt die Hand und hat das Verlangen jemanden zu klatschen*`
          ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};