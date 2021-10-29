const createReducer = (initialState, dispatchers = {}) => {
  const reducer = (
    state = initialState,
    { type, ...payload },
    middleWare = null
  ) => {
    if (middleWare) middleWare(state, { type, payload });

    return dispatchers[type](state, payload) ?? state;
  };

  return reducer;
};

module.exports = createReducer;
