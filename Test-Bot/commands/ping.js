const { SlashCommandBuilder } = require("discord.js");
const interactionCreate = require("../events/interactionCreate");

var timeout = [];

module.exports = {
   data: new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!"),
   async execute(interaction) {
      await interaction.reply("Pong!");
   },
};
