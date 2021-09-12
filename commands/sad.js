const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('sad')
		.setDescription('Trauere mit anderne Leuten :(')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User mit dem du trauern willst :(')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const sadUser = interaction.options.getMember('user');

        if(sadUser) {
            if(sadUser.user.id === interaction.user.id) {
                let antworten = [
                    `*${interaction.user} ist grad traurig :(*`,
                    `*${interaction.user} ist grad traurig :(*`,
                    `*${interaction.user} hat grad schlechte Laune... Mag jemand helfen? :,(*`
                ]
                return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
            }
            let antworten = [
                `*${interaction.user} trauert mit ${sadUser} :(*`,
                `*${interaction.user} trauert mit ${sadUser} :(*`,
                `*${interaction.user} trauert mit ${sadUser} :(*`,
                `*${interaction.user} weint mit ${sadUser} :,(*`,
                `*${interaction.user} weint mit ${sadUser} :,(*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user} ist grad traurig :(*`,
            `*${interaction.user} ist grad traurig :(*`,
            `*${interaction.user} hat grad schlechte Laune... Mag jemand helfen? :,(*`
        ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};