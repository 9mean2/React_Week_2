import React from "react";
import styled from "styled-components";
import "./App.css";
import TestPage from "./component/TestPage";
import GlobalStyle from "./GlobalStyle";

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

const StCon = styled.div`
  display: flex;
`;

const boxList = ["red", "blue", "green", "black"];

const getBoxName = (color) => {
  switch (color) {
    case "red":
      return "빨간 박스";
    case "blue":
      return "파란 박스";
    case "green":
      return "초록 박스";
    default:
      return "검정 박스";
  }
};

function App() {
  return (
    // <StCon>
    //   {/* <StBox b(orderColor="red">빨간박스</StBox> */}
    //   {boxList.map((box) => {
    //     return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
    //   })}
    // </StCon>
    <>
      <GlobalStyle />
      <TestPage title="title" contents="contents" />
    </>
  );
}

export default App;
