const Discord = require("discord.js");
module.exports = {
	name: 'works',
	aliases: [],
    serverOnly: ['884320938475261952', '884275888240361543'],
	description: "Returns ping",
	run: async (client, message, args) => {

		message.reply({content: "Yup! It works here"})
	},
};
