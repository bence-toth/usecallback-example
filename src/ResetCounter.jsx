const ResetCounter = (props) => {
  const onResetCounter = () => {
    console.log(`The counter was reset after ${props.counter}`);
    props.setCounter(0);
  };

  return <button onClick={onResetCounter}>Reset counter #2</button>;
};

export default ResetCounter;
