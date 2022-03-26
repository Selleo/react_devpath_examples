import { memo, useEffect, useState } from "react";

const Button = ({ onClickHandler, children }) => {
  console.log("Button rerender");
  return <button onClick={onClickHandler}>{children}</button>;
};
const MemoizedButton = memo(Button);

export function ComponentWithExpensiveState({ initialLength }) {
  // useState optimization #1
  const [data, setData] = useState(
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
    })
  );

  useEffect(() => {
    console.log("data changed!");
  }, [data]);

  // handler optimization #2
  const addNewElement = () => {
    const val = Math.round(Math.random() * 30_000);
    setData([{ val, id: `${val}-${Math.random()}` }, ...data]);
  };

  return (
    <div>
      <h1>Data length: {data.length}</h1>
      <MemoizedButton onClickHandler={addNewElement}>
        Add element
      </MemoizedButton>
      <ul>
        {data.slice(0, 50).map((item) => (
          <li style={{ listStyleType: "none" }} key={item.id}>
            {item.val}
          </li>
        ))}

        <li style={{ margin: "10px 0", listStyleType: "none" }}>
          === {data.length - 100} more items ===
        </li>

        {data.slice(-51, -1).map((item) => (
          <li style={{ listStyleType: "none" }} key={item.id}>
            {item.val}
          </li>
        ))}
      </ul>
    </div>
  );
}
