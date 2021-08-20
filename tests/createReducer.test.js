const createReducer = require("../src/createReducer");

const initialState = {
  users: [],
};

const reducer = createReducer(initialState, {
  ["ADD_USER"]: (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  }),
  ["UPDATE_USER_NAME"]: (state, { index, name }) => {
    const { users } = state;

    if (users[index]) users[index].name = name;
    return { ...state, users };
  },
});

let newState = reducer(undefined, {
  type: "ADD_USER",
  user: { name: "Giovanni", age: "24" },
});

newState = reducer(newState, {
  type: "ADD_USER",
  user: { name: "Ingrid", age: "22" },
});

newState = reducer(newState, {
  type: "UPDATE_USER_NAME",
  index: 0,
  name: "Gio",
});

console.log(newState);
