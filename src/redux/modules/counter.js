// src/modules/counter.js

export const PLUS_ONE = "PLUS_ONE";
export const MINUS_ONE = "MINUS_ONE";
export const PLUS_N = "PLUS_N";
export const MINUS_N = " MINUS_N";

// action creator  : action value 를 return 하는 함수

export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload: payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload: payload,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서

// 액션 객체라는 것은 액션 타입을 페이로드 만큼 처리하는 것이다
// 페이로드가 3이다. 3만큼을 플러스

const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
