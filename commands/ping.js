/**
 * @type {import("../typings").Command}
 */
export default {
	// Command name: ["default language", "second language"] or "default language"
	name: "ping",
	// Description: ["default language", "second language"] or "default language"
	description: "Show the bot's ping",
	// Available in DM: true | false
	dm: true,
	// Owner only: true | false
	ownerOnly: false,
	// Permissions: ["ADMINISTRATOR",...] or 8 (see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags)
	permissions: [],
	/* Options: 
	[{ type: 3, name: "string-option", description: "The string option" },...] (see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure)
	[new SlashCommandStringOption().setName("string-option").setDescription("The string option"),...] (see https://discord.js.org/#/docs/builders/main/class/SlashCommandStringOption)*/
	options: [],
	execute: async ({ interaction, args, client }) => {
		interaction.reply({
			// prettier-ignore
			content: `Discord Ping: ${client.ws.ping}\nBot Ping: ${Math.abs(Date.now() - interaction.createdTimestamp)}ms`,
		});
	},
};
