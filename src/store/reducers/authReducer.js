const initState = {
    signUpError: null,
    signInError: null,
    signOutError: null,
    redirectToEmail: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGN_UP_SUCCESS":
            return {
                ...state,
                redirectToEmail: true
            }
        case "SIGN_UP_ERROR":
            return {
                ...state,
                signUpError: action.err.message
            }
        case "SIGN_IN_SUCCESS":
            return state;
        case "SIGN_IN_ERROR":
            return {
                ...state,
                signInError: action.err.message
            }
        case "SIGN_OUT_SUCCESS":
            return state;
        case "SIGN_OUT_ERROR":
            return {
                ...state,
                signOutError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;