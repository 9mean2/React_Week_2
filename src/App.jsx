import React, { useEffect, useRef } from "react";

function App() {
  const idRef = useRef("");

  //화면이 렌더링 될 때 어떤 작업을 하고 싶다 : useEffect

  useEffect(() => {
    idRef.current.focus();
  }, []);

  return (
    <>
      <div>
        아이디 : <input type="text" ref={idRef} />{" "}
      </div>
      <div>
        비밀번호 : <input type="password" />
      </div>
    </>
  );
}

export default App;
