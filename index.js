const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help [En Cours de devplopement]");
    console.log("Connected");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message,content === prefix + "help"){
        message.channel.sendMessage("Liste des commande: /n -*help");
    }

    if (message.content === "Daabey <3"){
        message.reply("Salam les kheys :) <3");
        consol.log("Commande Daabey <3 effectué");
    }
});
