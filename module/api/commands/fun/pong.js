module.exports = {
    name: '퐁',
    description: '퐁!',
    slash: true,
    cooldown: 2,
    execute(message, args) {
        message.channel.send('핑.');
    },
};