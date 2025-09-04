import React from "react";
import { useCounter } from "./customStore.js";

// NumberView component
const NumberView: React.FC = () => {
	const count = useCounter((state) => state.count);

	return (
		<div>
			<h1>Count: {count}</h1>
		</div>
	);
};

export default NumberView;
