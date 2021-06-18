module.exports={
    name: '따라말하기',
    aliases: ['따라하기'],
    description: '메세지 따라말하기',
    cooldown: 2,
    slash: true,
    execute(message, args){
        message.channel.send(args);
    },
};