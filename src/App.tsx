import React, { useEffect } from "react";
import useCounterStore from "./store.js";

const App: React.FC = () => {
  const store = useCounterStore(state=>{
    return {count:state.count};
  });
  // useEffect(()=>{console.log(state.count);},[]);
  return <h1>무한 렌더링 테스트용 프로젝트</h1>;
};

export default App; 