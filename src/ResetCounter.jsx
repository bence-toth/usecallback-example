const ResetCounter = ({ counter, setCounter }) => {
  const onResetCounter = () => {
    console.log(`The counter was reset after ${counter}`);
    setCounter(0);
  };

  return <button onClick={onResetCounter}>Reset counter #2</button>;
};

export default ResetCounter;
