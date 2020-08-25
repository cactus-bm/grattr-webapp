const initState = {
    signUpError: null,
    signInError: null,
    signOutError: null,
    redirectToEmail: false,
    emailSentError: null,
    checkVerfiedEmailError: null,
    verifiedEmailAddress: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGN_UP_SUCCESS":
            return {
                ...state,
                redirectToEmail: true
            }
        case "SIGN_UP_EMAIL_FAILED":
            return {
                ...state,
                signUpError: action.err.message
            }
        case "FAILED_TO_CREATE_USER":
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
        case "CHECK_VERFIFIED_EMAIL_SUCCESS":
            return {
                ...state,
                verifiedEmailAddress: action.email
            }
        case "CHECK_VERFIFIED_EMAIL_ERROR":
            return {
                ...state,
                checkVerfiedEmailError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer;