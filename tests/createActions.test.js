const createActions = require("../src/createActions");

const Actions = createActions(
  {
    addUser: ["name", "age"],
    updateUserName: ["name"],
  },
  "users"
);

console.log("Actions", Actions);
