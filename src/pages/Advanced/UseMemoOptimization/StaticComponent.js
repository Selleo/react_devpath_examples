import { memo } from "react";
import { expensiveCalculation } from "./expensiveCalculation";

const initialLength = Math.floor(Math.random() * 100) + 20;
export const StaticComponent = memo(() => {
  // useMemo does not provide benefit in this case,
  // as this component is only mounted and after mounting it does not rerender
  const [{ val }] = expensiveCalculation(initialLength);

  return (
    <p>
      I'm a static component with heavy calculation on every rerender.
      <br />
      <b>val: {val}</b>
    </p>
  );
});
