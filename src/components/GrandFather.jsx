import React from "react";
import Father from "./Father";
// GF > Child 한테 어떤 정보를 알려줘서 Child가 그 내용을 출력하도록
function GrandFather() {
  const houseName = "스파르타";
  const pocketMoney = 10000;
  return <Father houseName={houseName} pocketMoney={pocketMoney} />;
}

export default GrandFather;
