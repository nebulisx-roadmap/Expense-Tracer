import { Option } from "commander";
import { prisma } from "@/lib/client";

const name = "list";
const description = "List all expenses";
const options: any[] = [];
const action = async () => {
  const expenses = await prisma.expense.findMany();

  if (expenses.length === 0) {
    console.log("No expenses found");
    return;
  }

  console.log("Expenses:");
  console.log("---------");
  console.log("ID\tAmount\tDescription");
  expenses.forEach((expense) => {
    console.log(`${expense.id}\t${expense.amount}\t${expense.description}`);
  });
};
export default { name, description, options, action };