module.exports = {
    name: "명령어",
    aliases: ['명령어목록'],
    description: '명령어 목록',
    cooldown: 2,
    slash: true,
    execute(message, args) {
        const Discord = require('discord.js');
        const commandEmbed = new Discord.MessageEmbed()
            .setColor('#23dd17')
            .setTitle(`캐다즈 명령어 목록`)
            .setAuthor(`캐다즈`, 'https://cdn.discordapp.com/attachments/621730667847221286/675259750023430152/fe3be0e321bb3240.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/621730667847221286/675259750023430152/fe3be0e321bb3240.png')
            .addFields(
                {name: '명령어', value: '명령어 목록을 확인합니다'},
                {name: '유저정보', value: '멘션한 유저의 정보를 확인합니다'},
                {name: '봇정보', value: '캐다즈의 정보를 확인합니다'},
                {name: '핑', value: '핑을 확인합니다'},
                {name: '퐁', value: '핑을 확인합니다'},
                {name: '동전', value: '동전을 던집니다'},
                {name: '따라말하기', value: '봇이 따라합니다'},
                {name: '현재시간', value: '지금시간을 확인합니다'},
                {name: '시간', value: '다른 나라의 시간을 확인합니다'},
                {name: '강', value: '강의 온도를 확인합니다'},
                {name: '초대', value: '봇 초대 링크를 확인합니다'},
                {name: '지원', value: '캐다즈 Support 서버 링크를 확인합니다'},
                {name: '제작자', value: '캐다즈 제작자를 확인합니다'},
            )
            .setTimestamp()
            .setFooter('개발자 카시#7777에 의해 인증됨', 'https://cdn.discordapp.com/avatars/621729000217116762/a4ff4edbb7124dfedffd08afea555985.png?size=256');
        message.channel.send(commandEmbed);
    },
};