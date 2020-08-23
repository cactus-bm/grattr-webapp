const initState = {
  lastUpdated: null,
  updateError: null,
  snapshot: [],
  getError: null,
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
    case "GET_ATTRIBUTES_SUCCESS":
      return {
        ...state,
        snapshot: action.snapshot.data().attributes,
        getError: null,
      };
    case "GET_ATTRIBUTES_ERROR":
      return {
        ...state,
        getError: action.err.message,
      };
    default:
      return state;
  }
};

export default attributeReducer;
