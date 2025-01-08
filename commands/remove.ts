import { Option } from "commander";
import { prisma } from "@/lib/client";

const name = "delete";
const description = "Delete an expense";
const options = [
  new Option("--id <id>", "Id of the expense").makeOptionMandatory(),
];
const action = async ({ id }: { id: string }) => {
  try {
    await prisma.expense.delete({
      where: {
        id: parseInt(id),
      },
    });

    console.log(`Expense deleted: ${id}`);
  } catch (error) {
    console.error(`Expense with id ${id} not found`);
  }
};
export default { name, description, options, action };
