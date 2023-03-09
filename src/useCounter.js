import { useState, useEffect } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((previousValue) => previousValue + 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return [counter, setCounter];
};

export default useCounter;
