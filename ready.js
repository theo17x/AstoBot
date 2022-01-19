const Discord = require("discord.js")
const Event = require("../../Structure/Event");
const SlashCommand = require("../../Structure/SlashCommand")

module.exports = new Event("ready", async bot => {

    const db = bot.db;

    await SlashCommand(bot);

    bot.user.setStatus("online")

    setTimeout(async () => {

        const activités = ["la v13 de discord.js", "le développement", "AoxyX_ Dév", `${bot.users.cache.size} utilisateurs`, `${bot.guilds.cache.size} serveurs`]
        const activities = activités[Math.floor(Math.random() * activités.length - 1)]

        bot.user.setActivity(activities, { type: "WATCHING"})

    }, 15000)
})