const createActions = require("../src/createActions");
const createReducer = require("../src/createReducer");

const { Types, Creators } = createActions(
  {
    addUser: ["name", "age"],
    updateUserName: ["index", "name"],
  },
  "users"
);

const initialState = {
  users: [],
};

const reducer = createReducer(initialState, {
  [Types.addUser]: (state, { name, age }) => ({
    ...state,
    users: [...state.users, { name, age }],
  }),
  [Types.updateUserName]: (state, { index, name }) => {
    const { users } = state;

    if (users[index]) users[index].name = name;
    return { ...state, users };
  },
});

let state = reducer(undefined, Creators.addUser("Giovanni", 24));

state = reducer(state, Creators.addUser("Ingrid", 22));

state = reducer(state, Creators.updateUserName(0, "Gio"));

console.log(state);
