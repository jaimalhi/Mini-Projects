const { SlashCommandBuilder } = require('discord.js');
const interactionCreate = require('../events/interactionCreate');

var timeout = [];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor('Blue')
            .setDescription(`:8ball: Pong!`)

		await interaction.reply({ embeds: [embed], ephemeral: true });
	},
};