https://discordapp.com/oauth2/authorize?&client_id=465265029285937172&scope=bot 


console.log("jojo todo listo");
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == 'hola bot'){
		message.channel.sendMessage('Hola! :D');
	}
});

bot.login('NDY1MjY1MDI5Mjg1OTM3MTcy.DiLgpA.AqTEEuDeNNudzhgAvkwgnS_4oeU');
