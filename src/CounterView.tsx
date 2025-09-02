import { counterStore, useCounter } from "./customStore.js";

const CounterView: React.FC = () => {
  console.log("CounterView component rendered");

  const { count,increment,decrement } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
};

export default CounterView;
