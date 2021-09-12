const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('kaba')
		.setDescription('Trinke Heiße Schoki!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User dem du Heiße Schoki geben willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const kabaUser = interaction.options.getMember('user');

        if(kabaUser) {
            let antworten = [
                `*${messageUser} gibt ${taggedUser} eine Heisse Schokolade*`,
                `*${messageUser} gibt ${taggedUser} einen White Hot Chocolate*`,
                `*${messageUser} gibt ${taggedUser} einen Hazelnut Chocolate*`,
                `*${messageUser} gibt ${taggedUser} einen Caramel Chocolate*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${messageUser} trinkt eine Heisse Schokolade*`,
            `*${messageUser} trinkt einen White Hot Chocolate*`,
            `*${messageUser} trinkt einen Hazelnut Chocolate*`,
            `*${messageUser} trinkt einen Caramel Chocolate*`
        ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};