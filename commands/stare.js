const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('stare')
		.setDescription('Starre ander User an')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User den du anstarren willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const stareUser = interaction.options.getMember('user');

        if(stareUser) {
            let antworten = [
                `*${interaction.user} starrt ${stareUser} an :eyes:*`,
                `*${interaction.user} starrt ${stareUser} an :eyes:*`,
                `*${interaction.user} starrt ${stareUser} an :eyes:*`,
                `*${interaction.user} starrt ${stareUser} an und stirbt dadurch :eyes:*`,
                `*${interaction.user} macht ein Starr Wettbewerb mit ${stareUser} :eyes:... ${stareUser} verliert und stirbt*`,
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user} starrt jemand hier an :eyes:*`,
            `*${interaction.user} starrt jemand hier an :eyes:*`,
            `*${interaction.user} hat das Verlangen jemanden anzustarren :eyes:*`
        ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};