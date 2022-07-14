import { useEffect, useState } from "react";
import { StaticComponent } from "./StaticComponent";
import { OftenRerenderWithPropsAffectingCalculation } from "./OftenRerenderWithPropsAffectingCalculation";
import { OftenRerender } from "./OftenRerender";

const styles = {
  border: "1px solid black",
  backgroundColor: "lightgray",
  margin: "10px",
};

export const UseMemoExamples = () => {
  const [val, setValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((v) => v + 1);
    }, 50);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <div style={styles}>
        component that rarely rerenders
        <br />
        <StaticComponent />
      </div>

      <div style={styles}>
        component that often rerenders but for other reasons
        <br />
        <OftenRerender someProp={val} />
      </div>

      <div style={styles}>
        component that often rerenders changing prop affecting the
        <br />
        calculation
        <OftenRerenderWithPropsAffectingCalculation initialLength={val} />
      </div>
    </div>
  );
};
