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
        let antworten;

        if (kabaUser) {
            if (kabaUser.user.id === interaction.user.id) return await interaction.reply({ content: 'Du kannst den Command nicht auf dich selber wirken! Für dich selbst, gib keinen User an.', ephemeral: true })
            antworten = [
                `*${messageUser} gibt ${taggedUser} eine Heisse Schokolade*`,
                `*${messageUser} gibt ${taggedUser} einen White Hot Chocolate*`,
                `*${messageUser} gibt ${taggedUser} einen Hazelnut Chocolate*`,
                `*${messageUser} gibt ${taggedUser} einen Caramel Chocolate*`
            ]
        } else {
            antworten = [
                `*${messageUser} trinkt eine Heisse Schokolade*`,
                `*${messageUser} trinkt einen White Hot Chocolate*`,
                `*${messageUser} trinkt einen Hazelnut Chocolate*`,
                `*${messageUser} trinkt einen Caramel Chocolate*`
            ]
        }
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
    },
};