import { Option } from "commander";
import { prisma } from "@/lib/client";

const name = "add";
const description = "Add a new expense";
const options = [
  new Option("-d, --description <description>", "Description of the expense").makeOptionMandatory(),
  new Option("-a, --amount <amount>", "Amount spent").makeOptionMandatory(),
];
const action = async ({ description, amount }: { description: string; amount: string }) => {
  const parsedAmount = parseFloat(amount);
  const expense = await prisma.expense.create({
    data: {
      description,
      amount: parsedAmount,
    },
  });
  console.log(`Expense added successfully: (ID: ${expense.id})`);
};
export default { name, description, options, action };