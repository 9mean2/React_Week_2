import React, { useRef, useState } from "react";

const style = {
  border: "1px solid black",
  margin: "10px",
  padding: "10px",
};

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // 화면에 렌더링이 계속 일어나고 있다
  const plusStateCountBtn = () => {
    setCount(count + 1);
    console.log(1);
  };

  const plusRefCountBtn = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  return (
    <>
      <div style={style}>
        state 영역입니다. {count} <br />
        <button onClick={plusStateCountBtn}> state 증가 </button>
      </div>
      <div style={style}>
        ref 영역입니다 {countRef.current} <br />
        <button onClick={plusRefCountBtn}>ref 증가</button>
      </div>
    </>
  );
}

export default App;
