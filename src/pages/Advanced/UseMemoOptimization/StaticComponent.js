import { memo } from "react";
import { expensiveCalculation } from "./expensiveCalculation";

export const StaticComponent = memo(() => {
  const { val } = expensiveCalculation(Math.floor(Math.random() * 1000) + 2000);

  return (
    <p>
      I'm a static component with heavy calculation on every rerender.
      <br />
      <b>val: {val}</b>
    </p>
  );
});
