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
			if (state !== nextState) setState(nextState);
		};

		const unsubscribe = subscribe(callbackRef.current);

		return () => {
			unsubscribe?.();
		};
	}, [subscribe, getSnapshot, state]);

	return state;
}
