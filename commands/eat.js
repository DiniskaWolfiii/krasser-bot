const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('eat')
		.setDescription('Esse jemanden')
        .addUserOption(option =>
            option.setName('user')
            .setDescription('User den du essen willst. Selbst erwähnen um dich selbst zu essen')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const eatUser = interaction.options.getMember('user');

        if(eatUser) {
            if(eatUser.user.id === interaction.user.id) {
                let antworten = [
                    `*${interaction.user} isst sich selbst :eyes:*`,
                    `*${interaction.user} isst sich selbst :eyes:*`,
                    `*${interaction.user} isst sich selbst :eyes:*`,
                    `*${interaction.user} isst sich selbst... Zählt das jetzt als Kannibalismus??*`
                ]
                return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
            }
            let antworten = [
                `*${interaction.user} isst ${eatUser} :eyes:*`,
                `*${interaction.user} isst ${eatUser} :eyes:*`,
                `*${interaction.user} isst ${eatUser} :eyes:*`,
                `*Beim Versuch ${eatUser} zu essen, stolpert ${interaction.user} und bricht sich die Zähne :eyes:*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user} hat das Verlangen jemanden zu essen :eyes:*`,
            `*${interaction.user} hat das Verlangen jemanden zu essen und schaut dabei jemand im Raum an :eyes:*`
        ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};