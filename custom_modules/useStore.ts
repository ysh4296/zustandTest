// import { useSyncExternalStore } from "react";
import type { Store } from "./store.js";
import { useExternalStore } from "./useExternalStore.js";

export const createStoreHook = <T>(store: Store<T>) => {
	return function useStore(): T {
		// react의 useSyncExternalStore를 사용하여 상태 변경을 구독
		// 이 훅은 컴포넌트가 상태를 구독하고, 상태가 변경될 때마다 컴포넌트를 리렌더링합니다.
		// 첫 번째 인자는 구독 함수, 두 번째 인자는 현재 상태를 반환하는 함수,
		// 세 번째 인자는 서버 사이드 렌더링을 위한 스냅샷 함수입니다.
		return useExternalStore(store.subscribe, () => store.getState());
	};
};
