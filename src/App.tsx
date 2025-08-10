import React, { useEffect, useState } from "react";
import useCounterStore from "./store.js";

const App: React.FC = () => {
  // const { setValue } = useTick();
  console.log("App component rendered");

  const store = useCounterStore();

  // useEffect(() => {
  //   setValue(0);
  //   console.log("useEffect called");
  // }, [setValue]);
  useEffect(() => {
    console.log("App mounted");
    return () => {
      console.log("App unmounted");
    };
  }, []);

  return <h1>무한 렌더링 테스트용 프로젝트</h1>;
};

const useTick = () => {
  const [num, setNum] = useState(0);
  const setValue = (value: number) => {
    setNum(value);
  };
  useEffect(() => {
    console.log("useTick mounted");
    return () => {
      console.log("useTick unmounted");
    };
  }, []);
  return { num, setNum, setValue };
};

export default App;
