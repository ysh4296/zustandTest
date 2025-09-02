export type Listener<T> = (state: T) => void;
export type SetOrUpdater<T> = T | ((state: T) => T);
export type Store<T> = {
  getState: () => T;
  setState: (nextState: SetOrUpdater<T>) => void;
  subscribe: (listener: Listener<T>) => () => void;
};

export const createStore = <T>(initialState: T): Store<T> => {
  let state = initialState;

  // 상태가 변했을 때 알림을 받는 컴포넌트 정보를 저장하는 집합
  const listeners = new Set<Listener<T>>();

  // 클로저를 사용해 state 접근
  const getState = () => state;

  // state가 바뀌면 리스너를 호출
  const setState = (nextState: SetOrUpdater<T>) => {
    const updated =
      typeof nextState === "function"
        ? (nextState as (prev: T) => T)(state)
        : nextState;
    state = updated;
    listeners.forEach((listener) => listener(state));
  };

  // 구독을 추가하는 함수
  // 컴포넌트에서 subscribe 함수를 호출하면
  // 해당 컴포넌트가 상태 변경을 구독하게 됨
  const subscribe = (listener: Listener<T>) => {
    listeners.add(listener);
    // 구독 해제 함수 반환
    return () => {
      listeners.delete(listener);
    };
  };

  return { getState, setState, subscribe };
};
