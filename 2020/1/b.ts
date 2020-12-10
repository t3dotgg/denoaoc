const results = await Deno.readTextFile("./input.txt");

const expenses = results.split("\n").map((n) => parseInt(n, 10));

console.log(expenses);

expenses.forEach((expense) => {
  expenses.forEach((expenseTwo) => {
    expenses.forEach((expenseThree) => {
      if (expense + expenseTwo + expenseThree === 2020) {
        console.log(
          expense,
          expenseTwo,
          expenseThree,
          expense * expenseTwo * expenseThree
        );
      }
    });
  });
});
