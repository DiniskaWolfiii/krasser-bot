const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('prost')
		.setDescription('Stoße mit anderen auf ein Bier an!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User mit dem du anstoßen willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const beerUser = interaction.options.getMember('user');

        if(beerUser) {
            if(beerUser.user.id === interaction.user.id) {
                let antworten = [
                    `*${interaction.user} stoßt mit sich selber an... :beers:*`,
                    `*${interaction.user} hat niemanden zum Antoßen... :beers:*`,
                ]
                return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
            }
            let antworten = [
                `*${interaction.user} stoßt mit ${beerUser} auf ein Bier an :beers:*`,
                `*${interaction.user} stoßt mit ${beerUser} auf ein Bier an :beers:*`,
                `*${interaction.user} stoßt mit ${beerUser} auf ein Bier an :beers:*`,
                `*${interaction.user} stoßt mit ${beerUser} auf ein Bier an :beers:*`,
                `*${interaction.user} stoßt mit ${beerUser} auf ein Bier an :beers:*`,
                `*${interaction.user} stoßt mit ${beerUser} auf ein Radler an :beers:*`,
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user} stoßt auf ein Bier an :beers:*`,
            `*${interaction.user} stoßt auf ein Bier an :beers:*`,
            `*${interaction.user} stoßt auf ein Bier an :beers:*`,
            `*${interaction.user} stoßt auf ein Bier an :beers:*`,
            `*${interaction.user} stoßt auf ein Radler an :beers:*`
          ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};