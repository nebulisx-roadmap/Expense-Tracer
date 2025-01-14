import { program } from "commander";
import commands from "@/commands";

// Setup the database
// const initDB = () => {
//   const db = new Database(process.env.DATABASE_URL);
//   db.exec(`
//     CREATE TABLE IF NOT EXISTS "expense" (
//     "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
//     "description" TEXT NOT NULL,
//     "amount" REAL NOT NULL,
//     "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     "updatedAt" DATETIME NOT NULL
// );
//   `);
// }

program
  .name("expense-tracer")
  .version("1.0.0-alpha")
  .description("A simple expense tracker application to manage your finances.");

commands.forEach(({ name, description, options, action }) => {
  const currentCommand = program.command(name).description(description);

  options.forEach((option) => {
    currentCommand.addOption(option);
  });

  currentCommand.action((option) => {
    action(option);
  });
});

// initDB()
program.parse();
