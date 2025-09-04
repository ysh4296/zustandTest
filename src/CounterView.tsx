import { useCounter } from "./customStore.js";

const CounterView: React.FC = () => {
	const { count, increment, decrement } = useCounter();

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button type="button" onClick={decrement}>
				Decrement
			</button>
			<button type="button" onClick={increment}>
				Increment
			</button>
		</div>
	);
};

export default CounterView;
