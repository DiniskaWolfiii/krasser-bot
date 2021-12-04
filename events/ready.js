module.exports = {
    name: 'ready',
    once: true,
/**
 * @param {import('discord.js').Client} client
 */
    execute (client) {
        console.log(`Succesfully logged in as ${client.user.username} with ID ${client.user.id}!`);
        let stati = [
            'Habe ich den Ofen ausgeschaltet?',
            'Sollte ich doch nochmal pinkeln gehen?',
            'Gibt es intelligentes Leben auf der Erde?',
            'Wie heißt Obama mit Nachnamen?',
            'Roboter übernehmen die Meschheit! 🤖'
        ]
        client.user.setActivity(stati, { type: 'PLAYING' });
    }
}