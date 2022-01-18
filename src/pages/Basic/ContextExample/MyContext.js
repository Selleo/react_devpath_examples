import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export const MyContext = createContext({
  prop1: {},
  prop3: {},
  someMemoizedData: {},
  someOtherMemoizedData: {},
  someCallback: () => {},
  someState: {},
  setSomeState: () => {},
});

// small helper used in components using the context
export const useMyContext = () => useContext(MyContext);

export function MyProvider({ prop1, prop2, prop3, children }) {
  const someMemoizedData = useMemo(() => {
    // some memoization logic
    return 42;
  }, []);
  const someOtherMemoizedData = useMemo(() => {
    // some memoization logic
    return { val: "This value took long to compute" };
  }, [prop1]);

  const someCallback = useCallback(() => {
    // some logic
    console.log('callback!')
  }, [prop2]);

  const [someState, setSomeState] = useState(prop3);

  // context values are kept in useMemo
  // so the object combining them is not redefined on every rerender

  // eg. changes of prop3 cause context rerender
  // but should not trigger updates of all components using data from context

  const values = useMemo(
    () => ({
      prop1,
      someMemoizedData,
      someOtherMemoizedData,
      someCallback,
      someState,
      setSomeState,
    }),
    [
      prop1,
      someMemoizedData,
      someOtherMemoizedData,
      someCallback,
      someState,
      setSomeState,
    ]
  );

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
