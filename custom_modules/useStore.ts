// import { useSyncExternalStore } from "react";
import type { Store } from "./store.js";
import { useExternalStore } from "./useExternalStore.js";

export const createStoreHook = <T>(store: Store<T>) => {
	return function useStore<Selected>(selector?: (state: T) => Selected) {
		// react의 useSyncExternalStore를 사용하여 상태 변경을 구독
		// 이 훅은 컴포넌트가 상태를 구독하고, 상태가 변경될 때마다 컴포넌트를 리렌더링합니다.
		// 첫 번째 인자는 구독 함수, 두 번째 인자는 현재 상태를 반환하는 함수

		// selector가 있으면 selector를 통해 상태를 선택하고, 없으면 전체 상태를 반환
		return useExternalStore(store.subscribe, () => {
			const state = store.getState();
			return selector ? selector(state) : state;
		});
	};
};
