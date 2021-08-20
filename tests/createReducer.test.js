const createReducer = require("../src/createReducer");

const initialState = {
  users: [],
};

const reducer = createReducer(initialState, {
  ["ADD_USER"]: (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  }),
});

let newState = reducer(undefined, {
  type: "ADD_USER",
  user: { name: "Giovanni", age: "24" },
});

newState = reducer(newState, {
  type: "ADD_USER",
  user: { name: "Ingrid", age: "22" },
});

console.log(newState);
