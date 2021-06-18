module.exports = {
    name: '핑',
    description: '핑!',
    slash: true,
    cooldown: 2,
    execute(message, args) {
        message.channel.send('퐁.');
    },
};