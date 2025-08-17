import { createStore } from "../custom_modules/store.js";
import { createStoreHook } from "../custom_modules/useStore.js";

type Counter = { count: number };

// 상태를 관리하는 스토어 생성
export const counterStore = createStore<Counter>({ count: 0 });
// 스토어를 통해 상태를 구독하는 훅 생성
export const useCounter = createStoreHook(counterStore);
