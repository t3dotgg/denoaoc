const results = await Deno.readTextFile("./input.txt");

const expenses = results.split("\n").map((n) => parseInt(n, 10));

console.log(expenses);

expenses.forEach((expense) => {
  expenses.forEach((expenseTwo) => {
    if (expense + expenseTwo === 2020) {
      console.log("FOUND IT");
      console.log(expense, expenseTwo, expense * expenseTwo);
    }
  });
});
