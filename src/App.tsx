import CounterView from "./CounterView.js";
import NumberView from "./NumberView.js";

const App: React.FC = () => {
	return (
		<h1>
			<NumberView />
			<CounterView />
		</h1>
	);
};

export default App;
