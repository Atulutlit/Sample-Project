import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

/* =========================
   1. Types
========================= */
type State = {
  count: number;
};

type Action = {
  type: "INCREMENT";
};

/* =========================
   2. Action
========================= */
const increment = (): Action => ({
  type: "INCREMENT",
});

/* =========================
   3. Reducer
========================= */
const initialState: State = {
  count: 0,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

/* =========================
   4. Store
========================= */
const store = createStore(reducer);

/* =========================
   5. Component
========================= */
const Counter: React.FC = () => {
  const count = useSelector((state: State) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
};

/* =========================
   6. App Wrapper
========================= */
const Redux: React.FC = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Redux;