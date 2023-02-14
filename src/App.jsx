import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { plusOne, minusOne } from "./redux/modules/counter";
import { plusN } from "./redux/modules/counter";
import { minusN } from "./redux/modules/counter";
function App() {
  const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   console.log("number -> " + number);
  // }, []);

  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다
  // useSelector

  const counter = useSelector((state) => {
    return state.counter;
  });

  // dispatch 가져오자

  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>;
      <div>
        <input
          type="number"
          value={number}
          onChange={(event) => {
            const { value } = event.target;
            setNumber(+value);
          }}
        />
      </div>
      <button
        onClick={() => {
          // // +1 을 해주는 로직을 써주면 된다
          // dispatch({
          //   type: PLUS_ONE,
          // });
          // dispatch(plusOne());
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // +1 을 해주는 로직을 써주면 된다
          // dispatch({
          //   type: MINUS_ONE,
          // });
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
