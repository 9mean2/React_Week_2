import React, { useContext } from "react";
import { FamilyContext } from "../context/FamiltContext";

const style = {
  color: "red",
  fontWeight: "900",
};

function Child() {
  const data = useContext(FamilyContext);
  console.log("data", data);
  return (
    <div>
      나는 이 집안의 막내에요 응애~ <br />
      할아버지가 우리집 이름은 <span style={style}>{data.houseName}</span>{" "}
      이라고 하셨어요 <br />
      게다가 용돈도 <span style={style}>{data.pocketMoney}</span>원 만큼
      주셨어요
    </div>
  );
}

export default Child;
