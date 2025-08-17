import React, { useEffect, useState } from "react";
import useCounterStore from "./store.js";
import CounterView from "./counterView.js";
import { useCounter } from "./customStore.js";

const App: React.FC = () => {
  console.log("App component rendered");

  // const { count } = useCounter();
  const store = useCounterStore();

  return (
    <h1>
      무한 렌더링 테스트용 프로젝트 {store.count}
      <CounterView />
    </h1>
  );
};

export default App;
