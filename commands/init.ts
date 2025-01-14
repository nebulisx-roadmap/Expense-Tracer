// TODO: Automatically Initialize the database and remove this command.

import { spawn } from "bun";

const name = "init";
const description = "Initialize the database";
const options: any[] = [];
const action = async () => {
  await spawn(["bun", "prisma", "migrate", "deploy"]);
  console.log("Database initialized successfully");
};
export default { name, description, options, action };