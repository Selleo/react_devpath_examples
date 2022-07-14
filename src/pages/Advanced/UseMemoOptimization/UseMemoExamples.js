import { useEffect, useState } from "react";
import { StaticComponent } from "./StaticComponent";
import { OftenRerenderWithPropsAffectingCalculation } from "./OftenRerenderWithPropsAffectingCalculation";
import { OftenRerender } from "./OftenRerender";

export const UseMemoExamples = () => {
  const [val, setValue] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((v) => v + 1);
    });

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <p>
        component that rarely rerenders
        <br />
        <StaticComponent />
      </p>

      <p>
        component that often rerenders but for other reasons
        <br />
        <OftenRerender someProp={val} />
      </p>

      <p>
        component that often rerenders changing prop affecting the
        <br />
        calculation
        <OftenRerenderWithPropsAffectingCalculation />
      </p>
    </div>
  );
};
