import { useState } from "react";
import { ComponentWithExpensiveState } from "./ComponentWithExpensiveState";

export function UseStateExample() {
  const [length, setLength] = useState(400);

  return (
    <div>
      <label htmlFor="length">Initial length for other component state</label>
      <input
        name="length"
        type="number"
        value={length}
        onChange={({ target }) => setLength(target.value)}
      />
      <ComponentWithExpensiveState initialLength={length} />
    </div>
  );
}
