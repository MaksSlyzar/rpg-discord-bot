import { ApplicationCommandDataResolvable, ChatInputApplicationCommandData, Events, SlashCommandBuilder } from "discord.js";
import fs from "fs";
import Client from "./classes/Client";
import Command from "./classes/Command";
import InventoryCommand from "./commands/inventory";
import { loadCommands } from "./loadCommands";

const client = new Client({intents: [
    "Guilds", 
    "GuildMessages", 
    "DirectMessages", 
    "MessageContent", 
    "GuildVoiceStates", 
    "GuildMessageReactions", 
    "DirectMessageReactions", 
    "GuildPresences", 
    "GuildEmojisAndStickers", 
    "GuildIntegrations",
    "GuildMembers",
    "GuildScheduledEvents",
    "GuildWebhooks"
]});

const commandsGlobal: Command[] = loadCommands();

client.once("ready", () => {
    console.log("Runned chupapi bot!");
    
    const commandDatas: ChatInputApplicationCommandData[] = [];

    for (let command of commandsGlobal) {
        console.log(`Load command "${command.data.name}"`)

        commandDatas.push(command.data);
        client.commands.set(command.data.name, command);
    }
    
    client.application?.commands.set(commandDatas, "1184999996723052544");
    // client.application?.commands.set(commands, "1026166910997495829");
});

client.once(Events.InteractionCreate, (interaction) => {
    if (!interaction.isChatInputCommand())
        return;

    if (interaction.command) {
        for (let command of commandsGlobal) {
            if (interaction.command.name == command.data.name) {
                command.execute(interaction);
            }
        }
    }
});

client.login("");

