import { useCounter } from "./customStore.js";

const CounterView: React.FC = () => {
	const { increment } = useCounter((state) => ({
		increment: state.increment,
	}));
	const decrement = useCounter((state) => state.decrement);

	return (
		<div>
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
