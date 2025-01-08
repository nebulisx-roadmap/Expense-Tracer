import { Option } from "commander";
import { prisma } from "@/lib/client";

const name = "summary";
const description = "Summary all expenses";
const options = [new Option("--month <month>", "Month to summarize")];
const action = async ({ month }: { month?: string }) => {
  const expenses = await prisma.expense.findMany();

  if (expenses.length === 0) {
    console.log("No expenses found");
    return;
  }

  let total = 0;
  let totalByMonth = 0;

  if (month) {
    expenses.forEach((expense) => {
      if (expense.createdAt.toLocaleString("default", { month: "numeric" }) === month) {
        totalByMonth += expense.amount;
      }
    });
    console.log(`Total expenses by month ${month}: ${totalByMonth}`);
  } else {
    expenses.forEach((expense) => {
      total += expense.amount;
    });
    console.log(`Total expenses: ${total}`);
  }

};
export default { name, description, options, action };
