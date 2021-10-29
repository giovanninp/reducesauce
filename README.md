# reducesauce

Simplified reducer pattern creation.

Based on [reduxsauce](https://github.com/jkeam/reduxsauce)

#

## Installation
``` bash
$ yarn add reducesauce
# or
$ npm -i reducesauce
```

## Usage

### `createActions`

```javascript
const Actions = createActions(
  {
    addUser: ["name", "age"],
    updateUserName: ["name"],
  },
  "users"
);
/*
    RETURN:
    const Actions = {
        Creators: {
            addUser: (name, age) => ...,
            updateUserName: (index, name) => ...
        },
        Types: {
            addUser: 'users/ADD_USER',
            updateUserName: 'users/UPDATE_USER_NAME'
        }
    }
*/
```

### `createReducer`

```javascript
    const initialState = {
    users: [],
    };

    const reducer = createReducer(initialState, {
        [Actions.Types.addUser]: (state, {name, age}) => ...,
        [Actions.Types.updateUserName]: (state, {name, age}) => ...,
    });
/*
    const _dispatchers = {
        'users/ADD_USER': (state, {name, age}) => ...,
        'users/UPDATE_USER_NAME': (state, {index, name}) => ...
    }
    RETURN:
    function reducer(state = initialState, action, middleWare) {
        if(middleWare) middleWare(state, action);

        return _dispatchers[action.type](state, action.payload) ?? state
    }
*/
```
