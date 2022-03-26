import { useEffect, useState } from "react";

const defaultHandler = (value) => {
  console.log(`ms after component gets rendered: `, value);
};

const Button = ({ onClick, children }) => {
  console.log("Button rerender");

  return <button onClick={onClick}>{children}</button>;
};

export function UseRefOptimization({ handleClick = defaultHandler }) {
  const [timerValue, setTimerValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setTimerValue((currentValue) => currentValue + 1),
      1
    );
    return () => clearInterval(interval);
  }, []);

  const logTimer = () => {
    handleClick(timerValue);
  };

  return (
    <div>
      <h1>
        Click the button and the timer value in will be logged in the console
      </h1>
      <Button onClick={logTimer}>ClickMe</Button>
    </div>
  );
}
