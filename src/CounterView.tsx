import { counterStore, useCounter } from "./customStore.js";

const CounterView: React.FC = () => {
  console.log("CounterView component rendered");

  const { count } = useCounter();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button
        onClick={() =>
          counterStore.setState((prev) => ({ count: prev.count - 1 }))
        }
      >
        Decrement
      </button>
      <button
        onClick={() =>
          counterStore.setState((prev) => ({ count: prev.count + 1 }))
        }
      >
        Increment
      </button>
    </div>
  );
};

export default CounterView;
