module.exports = {
    name: 'ready',
    once: true,
/**
 * @param {import('discord.js').Client} client
 */
    execute (client) {
        console.log(`Succesfully logged in as ${client.user.username} with ID ${client.user.id}!`);
    }
}