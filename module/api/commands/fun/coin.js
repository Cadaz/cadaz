module.exports={
    name: '동전',
    aliases: ['동전던지기', '동전뒤집기'],
    description: '동전 던지기',
    cooldown: 2,
    slash: true,
    execute(message, args){
        const result = Math.floor(Math.random()*2);
        if(result===1){
            message.channel.send(`앞면이 나왔습니다, ${message.author}`);
        }else{
            message.channel.send(`뒷면이 나왔습니다., ${message.author}`);
        };
    },
};