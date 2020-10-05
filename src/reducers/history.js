const initialState = {
  list: [],
};

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SEARCH':
      const temp = state.list;
      temp.unshift(action.value);
      return Object.assign({}, state, {list: temp});

    default:
      return state;
  }
};
