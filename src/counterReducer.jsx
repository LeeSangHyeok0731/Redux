// counterReducer.js
const initialState = {
    count: 0, // 초기 상태
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 }; // 증가
      case 'DECREMENT':
        return { ...state, count: state.count - 1 }; // 감소
      default:
        return state; // 다른 액션일 경우 현재 상태 유지
    }
  };
  
  export default counterReducer;
  