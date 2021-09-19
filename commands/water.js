const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('water')
        .setDescription('Trink oder gib anderen Wasser!')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User dem du Wasser geben willst!')
                .setRequired(false)),

    /**
     * @param {import('discord.js').Interaction} interaction
     */
    async execute(interaction) {
        const waterUser = interaction.options.getMember('user');
        let antworten;

        if (waterUser) {
            if (waterUser.user.id === interaction.user.id) return await interaction.reply({ content: 'Du kannst den Command nicht auf dich selber wirken! Für dich selbst, gib keinen User an.', epehemral: true })
            antworten = [
                `*${interaction.user} gibt ${waterUser} Wasser*`,
                `*${interaction.user} gibt ${waterUser} Wasser*`,
                `*${interaction.user} gibt ${waterUser} Wasser*`,
                `*${interaction.user} gibt ${waterUser} Wasser. Stay hydrated!*`,
                `*${interaction.user} gibt ${waterUser} Wasser. Stay hydrated!*`,
                `*${interaction.user} gibt ${waterUser} Wasser. Stay hydrated!*`,
                `*${interaction.user} gibt ${waterUser} Wasser. Stay hydrated!*`,
                `*${interaction.user} gibt ${waterUser} so viel Wasser dass ${waterUser} ertrinkt... Stay hydrated!*`
            ]
        } else {
            antworten = [
                `*${interaction.user} trinkt Wasser*`,
                `*${interaction.user} trinkt Wasser`,
                `*${interaction.user} trinkt Wasser`,
                `*${interaction.user} trinkt Wasser`,
                `*${interaction.user} trinkt so viel Wasser dass ${interaction.user} ertrinkt... Stay hydrated!*`
            ]
        }
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
    },
};