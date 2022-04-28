const initialState = {
  users: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, users: action.payload };
    case "ADD_DATA":
      let temp = state.users;
      temp.push(action.payload);
      return { ...state, users: temp };
    case "DELETE_DATA":
      let tempDel = state.users.filter((e) => e.id != action.payload);
      return { ...state, users: tempDel };
    default:
      return state;
  }
};
