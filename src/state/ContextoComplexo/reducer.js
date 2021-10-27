const initialState = {
  user: {
    name: "Koda",
    email: "koda@kodinha",
  },
  job: "",
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload,
        },
      };
    case "CHANGE_PROFILE":
      return {
        ...state,
        job: action.payload,
      };
    default:
      return initialState;
  }
};

export { initialState, stateReducer };
