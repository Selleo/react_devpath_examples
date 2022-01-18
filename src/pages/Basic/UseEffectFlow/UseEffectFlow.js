import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function UseEffectFlow() {
  const [val, setVal] = useState(0);

  // value from the state is stored in ref
  // so it can be accessed in the cleanup function
  const valRef = useRef(val);
  valRef.current = val;

  useEffect(() => {
    console.log(`main function for: ${val}`);
    console.log('====================')

    return () => {
      console.group("cleanup");
      // value of variable "val" is captured when the main function was run
      console.log(`val: ${val}`);

      // when reading the value from reference, it is already updated
      console.log(`val in ref.current: ${valRef.current}`);
      console.groupEnd();
    };
  }, [val]);

  return (
    <div>
      <button onClick={() => setVal((current) => current + 1)}>
        Trigger useEffect
      </button>
      <p>check browser console</p>
      <Link to="/basics/useEffect2">
        <button>Unmount component</button>
      </Link>
    </div>
  );
}
