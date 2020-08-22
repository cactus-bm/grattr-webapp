
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


export const signUpUser = (credentials) => {
  return (dispatch, action, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((resp) => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            username: credentials.username,
          })
          .then(() => {
            dispatch({ type: "SIGN_UP_SUCCESS" });
          });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_UP_ERROR", err });
      });
  };
};
