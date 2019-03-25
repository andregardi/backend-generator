import { useState } from "react";

let store = {
  state: 0,
  set: null
};

export const useCustom = () => {
  // const [state, set] = useState(store.state + 1);
  // store = {state}
  // store.set = value => {
  //   store.state = value;
  //   set(value);
  // };
  // return store;
  return useState();
};

const executeHook = value => {
  const [state, set] = useState(value);
  store = { state, setState: executeHook };
};
