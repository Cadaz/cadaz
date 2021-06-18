const fs = require('fs');
const Discord = require("discord.js");

const {cz_token, cz_prefix} = require('./api/config/env');

prefix = cz_prefix

const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const eventFolders = fs.readdirSync('./api/events');
for(const folder of eventFolders) {
	const eventFiles = fs.readdirSync(`./api/events/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of eventFiles) {
		const event = require(`./api/events/${folder}/${file}`);
		if (event.once){
			client.once(event.name,  (...args) => event.execute(...args, client));
		}else {
			client.on(event.name, (...args) => event.execute(...args, client));
		}
	}
}

const commandFolders = fs.readdirSync('./api/commands');
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./api/commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./api/commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('DM으로 봇을 사용을 할 수 없습니다.!');
    }
    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);

        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return message.reply('권한이 부족합니다');
        }
    }

    if (command.args && !args.length) {
        let reply = `인수를 입력해주세요. ${message.author}!`;
        
        if (command.usage) {
            reply += `\n명령어가 잘못되었습니다.: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
	    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	    if (now < expirationTime) {
		    const timeLeft = (expirationTime - now) / 1000;
		    return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
	    }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args, client);
	} catch (error) {
		console.error(error);
	}
});

client.login(cz_token);