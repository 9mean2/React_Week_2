import React from "react";
import HavyComponents from "./components/HavyComponents";

// heavy work -> 엄청 거운 작업
function App() {
  return (
    <>
      <nav
        style={{
          backgroundColor: "yellow",
          marginBottom: "30px",
        }}
      >
        네비게이션 바
      </nav>
      <HavyComponents />
      <footers
        style={{
          backgroundColor: "green",
        }}
        ssss
      >
        푸터 영역이에요
      </footers>
    </>
  );
}

export default App;
