import { ApplicationCommandDataResolvable, ApplicationCommandOption, ApplicationCommandOptionData, ChatInputApplicationCommandData, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

interface Command {
    data: {
        name: string,
        options: ApplicationCommandOptionData[],
        description: string
    };

    execute: (interaction: ChatInputCommandInteraction) => {};
}

export default Command;