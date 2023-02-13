import React, { useCallback, useState } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App() {
  console.log("app컴포 렌더링됐음");
  const [count, setCount] = useState(0);

  // 1 증가
  const onPlusBtnClickHandler = () => {
    setCount(count + 1);
  };

  // 1 감소
  const onMinusBtnClickHandler = () => {
    setCount(count - 1);
  };

  // counst 초기화해주는 함수

  const initCount = useCallback(() => {
    console.log(`${count}에서 0으로 변경되었습니다.`);
    setCount(0);
  }, [count]);

  return (
    <>
      <h3>카운트 예제입니다! ! ! </h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusBtnClickHandler}> + </button>
      <button onClick={onMinusBtnClickHandler}> - </button>
      <div
        style={{
          display: "flex",
          marginTop: "10px",
        }}
      >
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
