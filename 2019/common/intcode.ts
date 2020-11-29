export const runOperation = (op: number, a: number, b: number) => {
  switch (op) {
    case 1:
      return a + b;
    case 2:
      return a * b;
    default:
      console.error("BAD INSTRUCTION");
      return 0;
  }
};

export const readOperations = (buffIn: number[]) => {
  const buffer = [...buffIn];
  let index = 0;
  while (buffer[index] !== 99) {
    const result = runOperation(
      buffer[index],
      buffer[buffer[index + 1]],
      buffer[buffer[index + 2]]
    );
    buffer[buffer[index + 3]] = result;
    index += 4;
  }
  return buffer[0];
};
