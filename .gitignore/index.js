const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("Game:")

bot.on('ready', function() {
    bot.user.setGame("Commande: Game:help")
    console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande effectué");
    }

    if (message.content === prefix + ("fabriquant")){
        message.reply("_Ce bot a été créer par MisteurLuncheur_");
        console.log("Commande effectué");
    }

    if (message.content === ("Ping")){
        message.reply("Pong");
        console.log("Commande Ping effectué");
    }
});

bot.on("GuildMemberAdd", member => {
    member.guild.channel.find("name", "bienvenue").send(`Bienvenue ${member}`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} vient de quitter`)
})

bot.on('GuildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Joueur');
    member.addRole(role)
})

bot.on("message", message => {
    
    if(message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information du Dicord")
        .addField("Nom du discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.joinedAt)
        .addField("Utilisateur sur le discord", message.guild.memberCount)
        .setColor("#0000FF")
    message.channel.sendEmbed(embed)

    }

    if(message.content.startsWith(prefix + "sondage")) {
        if(message.author.id == "338681170290016256"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join(" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("#B40404")
                .setTimestamp()
            message.guild.channels.find("name", "idees💭").sendEmbed(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() {
            });
            }else{
                return message.reply("Tu n'as la permission.")
    }

    if (message.content.startsWith === prefix + "say") {
        message.delete();
        let args = message.content.split(" ").slice(1);
        message.channel.send(args.join(" "))
}}});

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Commande")
            .setDescription("Les commande du bot")
            .addField("Game:aide","Page d'aide", true)
            .addField("Salut","Pour dire Salut au bot", true)
            .addField("Ping","Pong !", true)
            .addField("Game:fabriquant","Pour savoir le créateur du bot", true)
            .addField("Game:say","Pour faire parler le bot", true)
            .addField("Game:infodiscord","Pour voir les info du serveur", true)
            .addField("Chaine de MisteurLuncheur","Suivez la Chaine de MisteurLuncheur ;)(https://www.youtube.com/channel/UC9eNMtiRt-6-AGV_2Ne9oog?view_as=subscriber)", true)
            .setColor("#29088A")
            .setFooter("Bon moment parmis nous ! :)")
        message.channel.sendEmbed(embed);
    }
});

bot.on('message', message => {
    if (message.content.startsWith(prefix + "say")) {
    var msg = message.content.substr('8')
    message.delete(message.author);
    message.channel.send(msg);
}});
