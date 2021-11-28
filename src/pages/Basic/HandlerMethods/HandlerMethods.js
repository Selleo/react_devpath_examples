import { useCallback, useState, memo } from "react";
import './HandlerMethods.css'

function Button({ onClick, children }) {
  console.log(`rerender button ${children}`);
  return <button onClick={onClick}>{children}</button>;
}

// components wrapped in memo will rerender only when props change
const MemoButton = memo(Button);

export default function HandlerMethods() {
  const [val, setVal] = useState(0);

  // extraction provides readability improvement
  // especially for bigger functions
  const extractedHandler = () => {
    setVal((curr) => curr + 1);
  };

  // hook useCallback provides performance benefit
  // only when component to which it is passed is memoized using React.memo
  const optimizedHandler = useCallback(() => {
    setVal((curr) => curr + 1);
  }, []);

  return (
    <div>
      <div>Check the logs in the console to see which components rerender</div>
      <span>value: {val}</span>
      <div className='buttons-list'>
        <MemoButton
          onClick={() => {
            // inline handler definition should be used only for one-liners
            // which don't need to be optimized
            setVal((curr) => curr + 1);
          }}
        >
          Memo Inline handler
        </MemoButton>
        <MemoButton onClick={extractedHandler}>Memo Extracted handler</MemoButton>
        {/* Only the component below is not re-rendered */}
        {/* because it gets optimized handler & is wrapped in React.memo*/}
        <MemoButton onClick={optimizedHandler}>Memo Optimized handler</MemoButton>
      </div>
      <div className='buttons-list'>
        <Button
          onClick={() => {
            setVal((curr) => curr + 1);
          }}
        >
          NON-Memo Inline handler
        </Button>
        <Button onClick={extractedHandler}>NON-Memo Extracted handler</Button>
        <Button onClick={optimizedHandler}>NON-Memo Optimized handler</Button>
      </div>
    </div>
  );
}
