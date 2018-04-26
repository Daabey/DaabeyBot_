const Discord = require('discord.js');
const Client = new Discord.Client();

var prefix = ("*")

Client.on('ready', function() {
    Client.user.setGame("Command: *help [En Cours de devplopement]");
    console.log("Connected");
});

Client.login("process.env.TOKEN");


Client.on('message', message => {
    if (message,content === prefix + "help"){
        message.channel.sendMessage("Liste des commande: /n -*help");
    }

    if (message.content === "Daabey <3"){
        message.reply("Salam les kheys :) <3");
        consol.log("Commande Daabey <3 effectué");
    }
});
