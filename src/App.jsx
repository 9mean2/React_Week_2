import React from "react";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div>Number State : {number}</div>;
      <button
        onClick={() => {
          //기존 업데이트
          //배치성으로 처리된다 , 배치 업데이트.

          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);

          // 렌더링이 잦다 -> 성능에 이슈가 있는 것 !

          // 함수형 업데이트

          setNumber((currentNumber) => currentNumber + 1);
          setNumber((currentNumber) => currentNumber + 1);
          setNumber((currentNumber) => currentNumber + 1);
        }}
      >
        {" "}
        누르면up
      </button>
    </>
  );
}

export default App;
