const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('coffee')
		.setDescription('Trink oder gib anderen Kaffee!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User dem du ein Kaffee spendieren willst')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
        const coffeeUser = interaction.options.getMember('user');
        if(coffeeUser) {
            let antworten = [
                `*${interaction.user} gibt ${cofeeUser} einen Latte Macchiato*`,
                `*${interaction.user} gibt ${cofeeUser} einen Java Chip Frappucino*`,
                `*${interaction.user} gibt ${cofeeUser} einen Pumpkin Pie Latte*`,
                `*${interaction.user} gibt ${cofeeUser} einen Espresso*`,
                `*${interaction.user} gibt ${cofeeUser} einen Vanille Chocolate Latte*`,
                `*${interaction.user} gibt ${cofeeUser} einen Kaffee*`,
                `*${interaction.user} gibt ${cofeeUser} einen White Chocolate Macchiato*`,
                `*${interaction.user} gibt ${cofeeUser} einen Caffè Latte*`,
                `*${interaction.user} gibt ${cofeeUser} einen Cappuccino*`,
                `*${interaction.user} gibt ${cofeeUser} einen Caramel Macchiato*`,
                `*${interaction.user} gibt ${cofeeUser} einen Caffè Mocha*`,
                `*${interaction.user} gibt ${cofeeUser} einen Caffè Americano*`
            ]
            let randomNumber = Math.floor(Math.random()*antwortenOhne.length);
            return await interaction.reply(antworten[randomNumber])
        }
        
        let antworten = [
            `*${interaction.user} trinkt einen Latte Macchiato*`,
            `*${interaction.user} trinkt einen Java Chip Frappucino*`,
            `*${interaction.user} trinkt einen Pumpkin Pie Latte*`,
            `*${interaction.user} trinkt einen Espresso*`,
            `*${interaction.user} trinkt einen Vanille Chocolate Latte*`,
            `*${interaction.user} trinkt einen Kaffee*`,
            `*${interaction.user} trinkt einen White Chocolate Macchiato*`,
            `*${interaction.user} trinkt einen Caffè Latte*`,
            `*${interaction.user} trinkt einen Cappuccino*`,
            `*${interaction.user} trinkt einen Caramel Macchiato*`,
            `*${interaction.user} trinkt einen Caffè Mocha*`,
            `*${interaction.user} trinkt einen Caffè Americano*`
        ]
        let randomNumber = Math.floor(Math.random()*antwortenOhne.length);
        await interaction.reply(antworten[randomNumber])

	},
};