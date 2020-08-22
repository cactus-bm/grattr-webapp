export const signInUser = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
        dispatch({ type: "SIGN_IN_SUCCESS" })
    })
    .catch((err) => {
        dispatch({ type: "SIGN_IN_ERROR" })
    })
  };
};
