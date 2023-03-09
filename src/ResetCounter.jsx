import { useCallback } from "react";

const ResetCounter = ({ counter, setCounter }) => {
  const onResetCounter = useCallback(() => {
    console.log(`The counter was reset after ${counter}`);
    setCounter(0);
  }, [counter, setCounter]);

  return <button onClick={onResetCounter}>Reset counter #2</button>;
};

export default ResetCounter;
