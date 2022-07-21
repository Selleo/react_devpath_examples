import { expensiveCalculation } from "./expensiveCalculation";
import { useMemo } from "react";

const staticInitialLength = Math.floor(Math.random() * 100) + 20;

export const OftenRerenderWithPropsAffectingCalculation = ({
  initialLength,
}) => {
  // everytime the component updates initialLength is different
  // making the calculation trigger everytime even when using useMemo hook
  const [{ val }] = useMemo(
    () => expensiveCalculation(staticInitialLength + (initialLength % 5)),
    [initialLength]
  );

  return (
    <p>
      I'm an often rerendering component with heavy calculation on every
      rerender.
      <br />
      The cause of rerendering is not related to the expensive calculation
      <br />
      <b>val: {val}</b>
    </p>
  );
};
