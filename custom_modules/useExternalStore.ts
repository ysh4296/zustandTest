import { useEffect, useRef, useState } from "react";
import type { Listener } from "./store.js";

export function useExternalStore<T>(
	subscribe: (listener: Listener<T>) => () => void,
	getSnapshot: () => T,
): T {
	const [state, setState] = useState(getSnapshot);

	const callbackRef = useRef<() => void>(null);

	useEffect(() => {
		callbackRef.current = () => {
			const nextState = getSnapshot();
			setState(nextState);
		};

		const unsubscribe = subscribe(callbackRef.current);
		console.log("subscribe or getSnapshot changed!");

		return () => {
			unsubscribe?.();
		};
	}, [subscribe, getSnapshot]);

	return state;
}
