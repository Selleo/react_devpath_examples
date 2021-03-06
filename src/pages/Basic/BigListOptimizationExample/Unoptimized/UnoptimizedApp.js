import { useEffect, useState } from "react";
import MOCK_DATA from "../MOCK_DATA";
import { getNewElement } from "../helpers";
import { Item } from "../Item";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(function timerSetup() {
    const timerId = setInterval(() => {
      setTimer((currentTimer) => currentTimer + 1);
    }, 1);

    return () => clearInterval(timerId);
  }, []);

  return <div>Some timer value: {timer}</div>;
};

export default function UnoptimizedApp() {
  const [list, setList] = useState(MOCK_DATA);

  // each update of timer cause recalculation of filteredListElements
  // this takes time on itself
  // on top of that, in JSX react needs to map over them to check if virtual DOM matches the HTML
  // having key={id} prevents recreating HTML nodes which would kill performance even more, but creating virtual DOM takes time
  const filteredListElements = list.filter((_, index) => index % 24);

  // each update of timer cause causes addElementToList to be new function instance
  const addElementToList = () =>
    setList((currentList) => [getNewElement(), ...currentList]);

  return (
    <>
      <h1>Unoptimized App</h1>

      <Timer />

      <div>
        <h3>Some big list</h3>
        <button onClick={addElementToList}>Add element to list</button>
        <ol style={{ width: "40%", margin: "0 auto" }}>
          {/*on every rerender we need to map over filteredListElements and generate virtual dom out of it*/}
          {filteredListElements.map((element) => (
            <Item element={element} />
          ))}
        </ol>
      </div>
    </>
  );
}
