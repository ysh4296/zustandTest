import { createStore } from "../custom_modules/store.js";
import { createStoreHook } from "../custom_modules/useStore.js";

type State = { count: number };
  
type Action = {
increment: () => void;
decrement: () => void;
};

// 상태를 관리하는 스토어 생성
export const counterStore = createStore<State&Action>({ count: 0,
    increment: ()=> counterStore.setState((state) => ({ ...state,count: state.count + 1 })),
    decrement: ()=> counterStore.setState((state) => ({ ...state,count: state.count - 1 })),
});

// 스토어를 통해 상태를 구독하는 훅 생성
export const useCounter = createStoreHook(counterStore);
