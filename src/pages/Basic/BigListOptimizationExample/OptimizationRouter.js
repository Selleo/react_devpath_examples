import { useCallback, useState } from "react";
import UnoptimizedApp from "./Unoptimized/UnoptimizedApp";
import OptimizedWithPassingListApp from "./OptimizedWithPassingList/OptimizedApp";
import UnoptimizedWithPassingListApp from "./UnoptimizedWithPassingList/UnoptimizedApp";
import OptimizedWithContainedListApp from "./OptimizedWithContainedList/OptimizedApp";

const apps = [
  UnoptimizedApp,
  OptimizedWithPassingListApp,
  UnoptimizedWithPassingListApp,
  OptimizedWithContainedListApp,
]

export function OptimizationRouter() {
  const [displayIndex, setIndex] = useState(0);

  const toggleDisplay = useCallback(() => {
    setIndex((currentIndex) => (currentIndex + 1) % 4)
  }, [])

  const Component = apps[displayIndex]

  return (
    <div>
      <header>
        <p>Example component below</p>
        <button onClick={toggleDisplay}>Display next example</button>
      </header>

      <Component />
    </div>
  );
}
