const initState = {
    signInError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGN_IN_SUCCESS":
            return state;
        case "SIGN_IN_ERROR":
            return {
                ...state,
                signInError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;