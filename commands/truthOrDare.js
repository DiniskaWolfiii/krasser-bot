const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {

    data: new SlashCommandBuilder()
        .setName('truth-or-dare')
        .setDescription('Spiele Truth or Dare mit dem Bot')
        .addStringOption(option =>
            option.setName('truth-or-dare')
                .setDescription('Tippe Truth oder Dare ein was du spielen willst')
                .setRequired(true)
                .addChoice('Truth', 'td-truth')
                .addChoice('Dare', 'td-dare')),

    /**
     * @param {import('discord.js').Interaction} interaction
     */
    async execute(interaction) {
        const auswahl = interaction.options.getString('truth-or-dare');
        let antworten;
        if (auswahl === 'td-truth') {
            antworten = [
                'Was ist das peinlichste was dir je passiert ist?',
                'Wie viele Menschen hast du bisher geküsst?',
                'Welches Tier passt am besten zu dir und warum?',
                'Welchen Star findest du heiß?',
                'Wen auf diesen Server würdest du daten wenn du müsstest (falls du schon mit jemand hier zusammen bist, zählt diese Person nicht!)',
                'Hast du schonmal was geklaut?',
                'Wer ist dein geheimer Crush?',
                'Wann hattest du das letzte Mal Sex?',
                'Hast du schonmal eine Straftat begangen?',
                'Was würdest du tun wenn du für einen Monat das andere Geschlecht wärst?'
            ]
            await interaction.reply('Truth: ' + antworten[Math.floor(Math.random() * antworten.length)])
        }
        else {
            antworten = [
                'Verteidige einen Furry wenn einer geflamed wird.',
                'Poste das neueste Bild in deiner Galerie.',
                'Joker: Gib jemanden deiner Wahl eine Aufgabe. Führe den Befehl nochmal aus um die Aufgabe für die Person zu erfahren.',
                'Mach nichts.',
                'Mach ein Foto von deiner Momentanen Sicht und poste es hier',
                'Überzeuge den gesamten Chat dazu dass du das andere Geschlecht bist',
                'Der Chat darf entscheiden was du trinken musst',
                'Der Chat darf entscheiden was deine Aufgabe ist'
            ]
            await interaction.reply('Dare: ' + antworten[Math.floor(Math.random() * antworten.length)])
        }
    },
};