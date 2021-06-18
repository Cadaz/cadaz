module.exports={
    name: '지원',
    description: '캐다즈 지원서버 url',
    cooldown: 2,
    slash: true,
    execute(message, args){
        message.channel.send('https://discord.gg/YZnYNd9D8x');
    },
};