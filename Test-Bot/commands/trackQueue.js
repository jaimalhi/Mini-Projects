const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
   data: new SlashCommandBuilder().setName("queue").setDescription("View the songs in queue"),
   async execute(interaction) {
      //TODO: add command functionality

      // embed creation
      const embed = new EmbedBuilder().setColor("Blue").setDescription(`:link: Showing queue`);

      // set a timeout to delete message after 3 seconds
      return interaction
         .reply({ embeds: [embed], ephemeral: true })
         .then((msg) => {
            setTimeout(() => msg.delete(), 3000);
         })
         .catch((error) => {
            console.error(error);
         });
   },
};
