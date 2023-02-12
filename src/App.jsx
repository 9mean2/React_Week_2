import React, { useEffect, useState } from "react";

function App() {
  const [value, setvalue] = useState("");

  // clean up
  useEffect(() => {
    console.log(`hello world : ${value}`);

    // return () => {
    //   //
    //   console.log("바이바이");
    // };
  }, [value]);

  return (
    <div>
      {/* 1. input에 값을 입력 */
      /* 2. value, 즉 state가 변경 */
      /* 3. state가 바뀌었기 때문에 -> App 컴포넌트가 리렌더링
      4. 리렌더링 -> useEffect()
      5. 1~4가 반복 */
      /* Dependency Array} */}

      <input
        type="text"
        value={value}
        onChange={(event) => {
          setvalue(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
