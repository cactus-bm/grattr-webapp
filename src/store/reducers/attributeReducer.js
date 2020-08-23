const initState = {
  lastUpdated: null,
  updateError: null,
};

const attributeReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_ATTRIBUTES_SUCCESS":
      return {
        ...state,
        updateError: null,
        lastUpdated: new Date().toISOString(),
      };
    case "UPDATE_ATTRIBUTES_ERROR":
      return {
        ...state,
        updateError: action.err.message,
        lastUpdated: new Date().toISOString(),
      };
    default:
      return state;
  }
};

export default attributeReducer;
