const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('freeze')
		.setDescription('Friere andere Benutzer ein!')
        .addUserOption(option =>
            option.setName('user')
            .setDescription('User den du einfrieren willst. Selbst erwähnen um dich selbst einzufrieren.')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const freezeUser = interaction.options.getMember('user');

        if(freezeUser) {
            if(freezeUser.user.id === interaction.user.id) {
                let antworten = [
                    `*${interaction.user} friert sich selbst ein :snowflake:*`,
                    `*${interaction.user} steht auf Kälte und friert sich selbst ein :snowflake:*`
                ]
                return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
            }
            let antworten = [
                `*${interaction.user} friert ${freezeUser} ein :snowflake:*`,
                `*${interaction.user} friert ${freezeUser} ein :snowflake:*`,
                `*${interaction.user} friert ${freezeUser} ein :snowflake:*`,
                `*${interaction.user} friert ${freezeUser} ein und yeetet ${freezeUser} in ein Gletscher :snowflake:*`,
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user} friert :cold_face:*`,
            `*${interaction.user} will jemand einfrieren :snowflake:*`
          ]
          await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};