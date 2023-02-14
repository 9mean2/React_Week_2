// src/modules/counter.js

// 초기 상태값
const initialState = {
  userId: 123,
};

// 리듀서
const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default users;
