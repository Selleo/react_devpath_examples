import { expensiveCalculation } from "./expensiveCalculation";

export const OftenRerenderWithPropsAffectingCalculation = ({
  initialLength,
}) => {
  const [{ val }] = expensiveCalculation(
    Math.floor(Math.random() * 100) + 20 + (initialLength % 5)
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
