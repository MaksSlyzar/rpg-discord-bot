import { ApplicationCommandOptionType, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import Command from "../classes/Command";

export default {
    data: {
        name: "inventory",
        description: "Description inventory",
    },
    execute(interaction: ChatInputCommandInteraction) {
        
    }
} as Command;
