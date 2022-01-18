import { MyProvider } from "./MyContext";
import { SomeComponent } from "./SomeComponent";

export const Main = () => {
  return (
    <div>
      Example context template
      <MyProvider prop1="asdf" prop2={[1, 2, 3]} prop3={3902}>
        <SomeComponent />
      </MyProvider>
    </div>
  );
};
