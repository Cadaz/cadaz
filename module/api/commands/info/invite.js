module.exports = {
    name: '초대',
    aliases: ['봇초대'],
    description: '봇초대 url',
    cooldown: 2,
    slash: true,
    execute(message, args){
        message.channel.send('https://discord.com/api/oauth2/authorize?client_id=716284328471953440&permissions=8&scope=bot');
    },
};