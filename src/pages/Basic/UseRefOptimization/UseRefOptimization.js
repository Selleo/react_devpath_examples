import { useEffect, useRef, useState } from "react";

const defaultHandler = (value) => {
  console.log(`ms after component gets rendered: `, value);
};

const Button = ({ onClick, children }) => {
  console.log("Button rerender");

  return <button onClick={onClick}>{children}</button>;
};

export function UseRefOptimization({ handleClick = defaultHandler }) {
  const [, setUpdate] = useState(0);
  const timerRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => (timerRef.current += 1), 1);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setUpdate((u) => u + 1), 250);
    return () => clearInterval(interval);
  }, []);

  const logTimer = () => {
    handleClick(timerRef.current);
  };

  return (
    <div>
      <h1>
        Click the button and the timer value in will be logged in the console{" "}
        {timerRef.current}
      </h1>
      <Button onClick={logTimer}>ClickMe</Button>
    </div>
  );
}
