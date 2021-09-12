const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('gabel')
		.setDescription('Wirf oder picks mit Gabeln nach Leuten!')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('User den du mit einer Gabel werfen willst. Selbst erwähnen für selbst picksen')
            .setRequired(false)),
		
/**
 * @param {import('discord.js').Interaction} interaction
 */
	async execute(interaction) {
		const gabelUser = interaction.options.getMember('user');

        if(gabelUser) {
            if(gabelUser.user.id === interaction.user.id) {
                let antworten = [
                    `*${interaction.user} pickst sich selbst mit einer Gabel...*`,
                    `*${interaction.user} hat Hunger und pickst sich selbst mit einer Gabel... Kann jemand helfen? Das sieht mir nicht ganz natürlich aus...*`
                ]
                return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
            }
            let antworten = [
                `*${interaction.user} pickst ${gabelUser} mit einer Gabel. Haha, du wurdest aufgegabelt!*`,
                `*${interaction.user} pickst ${gabelUser} mit einer Gabel. Haha, du wurdest aufgegabelt!*`,
                `*${interaction.user} pickst ${gabelUser} mit einer Gabel. Haha, du wurdest aufgegabelt!*`,
                `*${interaction.user} wirft Gabeln nach ${gabelUser} und gabelt ${gabelUser} damit an die Wand.*`
            ]
            return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
        }
        let antworten = [
            `*${interaction.user} hält energisch eine Gabel in der Hand*`
        ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
	},
};