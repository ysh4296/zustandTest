import React from "react";
import { useCounter } from "./customStore.js";
import CounterView from "./CounterView.js";

const App: React.FC = () => {
	const { count } = useCounter();
	// const store = useCounterStore();

	return (
		<h1>
			무한 렌더링 테스트용 프로젝트 {count}
			<CounterView />
		</h1>
	);
};

export default App;
