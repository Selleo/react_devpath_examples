import { expensiveCalculation } from "./expensiveCalculation";

const initialLength = Math.floor(Math.random() * 100) + 20;

export const OftenRerender = ({ someProp }) => {
  // in this case useMemo provides maximum benefit
  // as the component rerenders many times, but the props do not affect the calculation
  const [{ val }] = expensiveCalculation(initialLength);
  // const [{ val }] = useMemo(
  //   () => expensiveCalculation(initialLength),
  //   []
  // );

  return (
    <p>
      I'm an often rerendering component with heavy calculation on every
      rerender.
      <br />
      The cause of rerendering is not related to the expensive calculation
      <br />
      {someProp}
      <b>val: {val}</b>
    </p>
  );
};
