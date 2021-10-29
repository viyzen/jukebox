import { Client, Intents } from "discord.js";

async function start() {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
  client.login(process.env["TOKEN"]);
}

start();
