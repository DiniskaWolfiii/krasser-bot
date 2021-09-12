const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('fuckoff')
		.setDescription('Einfach nur Fock off...')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User von dem du angepisst bist')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const fuckoffUser = interaction.options.getMember('user');

        if(fuckoffUser) {
            let antworten = [
                `*${interaction.user} ist angepisst von ${fuckoffUser}... Fuck-Off...*`,
                `*${interaction.user} ist angepisst von ${fuckoffUser}... Fuck-Off...*`,
                `*${interaction.user} ist angepisst von ${fuckoffUser}... Fuck-Off...*`,
                `*${interaction.user} ist angepisst von ${fuckoffUser}... Fuck-Off...*`,
                `*${interaction.user} ist angepisst von ${fuckoffUser}... Fuck-Off...*`,
                `*${interaction.user} ist angepisst von ${fuckoffUser}... Fuck-Off...*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user}'s Worte: "Fuck-off..."*`,
            `*${interaction.user}'s Worte: "Fuck-off..."*`,
            `*${interaction.user} hat keinen Bock mehr und wirft alles hin... Just Fuck off...*`,
            `*${interaction.user} will einfach nicht mehr und schmeißt alles hin. FUCK-OFF!*`,
        ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};