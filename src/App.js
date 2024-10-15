import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const count = useSelector((state) => state.count); // 상태 가져오기
  const dispatch = useDispatch(); // 디스패치 함수 가져오기

  return (
    <div>
      <h1>카운터: {count}</h1>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
    </div>
  );
}

export default App;
