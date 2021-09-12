const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('corona')
        .setDescription('Teste dich selbst oder andere auf Corona zum Schutze aller!')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User den du auf Corona testen möchtest. Selbst erwähnen für ein Selbsttest')
                .setRequired(false)),

    /**
     * @param {import('discord.js').Interaction} interaction
     */
    async execute(interaction) {
        const coronaUser = interaction.options.getMember('user');

        if (coronaUser) {
            if (coronaUser.user.id === interaction.user.id) {
                let antworten = [
                    `*${interaction.user} testet sich selbst auf Corona... ${interaction.user} ist negativ!*`,
                    `*${interaction.user} testet sich selbst auf Corona... ${interaction.user} ist negativ!*`,
                    `*${interaction.user} testet sich selbst auf Corona... ${interaction.user} ist negativ!*`,
                    `*${interaction.user} testet sich selbst auf Corona... ${interaction.user} ist negativ!*`,
                    `*${interaction.user} testet sich selbst auf Corona... ${interaction.user} ist negativ!*`,
                    `*${interaction.user} testet sich selbst auf Corona... ${interaction.user} ist positiv!!! :bell:*`,
                    `*${interaction.user} testet sich selbst auf Corona... ${interaction.user} ist positiv!!! :bell:*`,
                    `*${interaction.user} manipuliert den Corona-Test. Er zeigt Negativ an.*`,
                    `*${interaction.user} manipuliert den Corona-Test. Er zeigt Positiv an!!! :bell:*`
                ]
                return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
            } else {
                let antworten = [
                    `*${interaction.user} testet ${coronaUser} auf Corona... Der Test zeigt Negativ an!*`,
                    `*${interaction.user} testet ${coronaUser} auf Corona... Der Test zeigt Negativ an!*`,
                    `*${interaction.user} testet ${coronaUser} auf Corona... Der Test zeigt Negativ an!*`,
                    `*${interaction.user} testet ${coronaUser} auf Corona... Der Test zeigt Negativ an!*`,
                    `*${interaction.user} testet ${coronaUser} auf Corona... Der Test zeigt Negativ an!*`,
                    `*${interaction.user} testet ${coronaUser} auf Corona... Der Test zeigt Positiv an!!! :bell:*`,
                    `*${interaction.user} testet ${coronaUser} auf Corona... Der Test zeigt Positiv an!!! :bell:*`,
                    `*${interaction.user} manipuliert den Corona-Test von ${coronaUser}... Er zeigt Negativ an.*`,
                    `*${interaction.user} manipuliert den Corona-Test von ${coronaUser}... Er zeigt Positiv an!!! :bell:*`
                ]
                return await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
            }
        }
        let antworten = [
            `*${interaction.user} hat das Verlangen jemanden hier im Raum auf Corona zu testen :test_tube:*`,
            `*${interaction.user} hält einen Corona-Test in der Hand :test_tube:*`
        ]
        await interaction.reply(antworten[Math.floor(Math.random() * antworten.length)])
    },
};