import ResetCounter from "./ResetCounter";

import { useCallback } from "react";
import useCounter from "./useCounter";

const App = () => {
  const [counter, setCounter] = useCounter();

  const onResetCounter = useCallback(() => {
    console.log(`The counter was reset after ${counter}`);
    setCounter(0);
  }, [counter, setCounter]);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={onResetCounter}>Reset counter</button>
      <ResetCounter counter={counter} setCounter={setCounter} />
    </div>
  );
};

export default App;
