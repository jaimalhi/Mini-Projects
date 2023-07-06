const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
   data: new SlashCommandBuilder()
      .setName("play")
      .setDescription("Play a song")
      .addStringOption((option) =>
         option.setName("query").setDescription("The song you want to play").setRequired(true)
      ),
   async execute(interaction) {
      const songName = interaction.options.getString("query");

      //TODO: add command functionality

      // embed creation
      const embed = new EmbedBuilder()
         .setColor("Blue")
         .setDescription(`:notes: Playing ${songName}`);

      // reply with songName & catch errors
      return interaction.reply({ embeds: [embed], ephemeral: false }).catch((error) => {
         console.error(error);
      });
   },
};
