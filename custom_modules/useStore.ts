import { useSyncExternalStore } from "react";
import type { Store } from "./store.js";

export const createStoreHook = <T>(store: Store<T>) => {
  return () => {
    const state = store.getState();
    const subscribe = store.subscribe;

    // react의 useSyncExternalStore를 사용하여 상태 변경을 구독
    //
    return useSyncExternalStore(
      subscribe,
      () => store.getState(),
      () => state
    );
  };
};
