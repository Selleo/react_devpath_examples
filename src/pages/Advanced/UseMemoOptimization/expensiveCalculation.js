export const expensiveCalculation = (initialLength) =>
  Array.from({ length: initialLength }, () => {
    const val = Math.round(
      Array.from(Array(30_000))
        .map(() => Math.random())
        .reduce((acc, val) => {
          acc += val;
          return acc;
        }, 0)
    );
    return { val, id: `${val}-${Math.random()}` };
  });
