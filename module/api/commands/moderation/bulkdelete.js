module.exports={
    name: '삭제',
    aliases: ['청소'],
    description: '메세지 청소',
    permissions: 'ADMINISTRATOR',
    slash: true,
    async execute(message, args) {
        if(!args[0]) return message.reply("지우고 싶은 메세지의 양을 입력해주세요.");
        if(isNaN(args[0])) return message.reply("숫자만 입력해주세요.");

        if(args[0] > 100) return message.reply("100개 초과하는 메세지를 삭제 할 수 없습니다! 100개 이하의 숫자를 입력해주세요.");
        if(args[0] < 1) return message.reply("1개 이상의 메세지만 삭제 할 수 있습니다 1 이상의 숫자를 입력해주세요.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages=>{
            message.channel.bulkDelete(messages);
        });
    },
};