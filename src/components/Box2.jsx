import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#4293ed",
  color: "white",
};

function Box2() {
  console.log(" Box2 컴포 렌더링됐음");
  return <div style={style}>Box2</div>;
}

export default Box2;
