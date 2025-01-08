import { Option } from "commander";
import { prisma } from "@/lib/client";

const name = "update";
const description = "Update an expense";
const options = [
  new Option("--id <id>", "Id of the expense").makeOptionMandatory(),
  new Option(
    "-d, --description <description>",
    "Description of the expense"
  ),
  new Option("-a, --amount <amount>", "Amount spent"),
];

const action = async ({
  id,
  description,
  amount,
}: {
  id: string;
  description?: string;
  amount?: string;
}) => {
  try {
    const parsedAmount = amount ? parseFloat(amount): undefined;
    const expense = await prisma.expense.update({
      where: {
        id: parseInt(id),
      },
      data: {
        description,
        amount: parsedAmount,
      },
    });
    console.log(`Expense updated successfully: ${description ? `(Description: ${description})`: ''}${amount && `(Amount: ${amount})`}`);
  } catch (error) {
    console.error(`Expense with id ${id} not found`);
  }
};
export default { name, description, options, action };
