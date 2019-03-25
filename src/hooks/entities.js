import { useState } from "react";

let state = 0;
export const store = {
  state: 0,
  setState(value) {
    store.state = value;
    // store.setters.forEach(setter => setter(store.state));
    store.setter(store.state);
  },
  setters: []
};

export function useStore() {
  const [state, set] = useState(store.state);
  // if (!store.setter) {
  store.setter = set;
  // }
  if (!store.setters.includes(set)) {
    store.setters.push(set);
  }

  return store;
}
