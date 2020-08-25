export const signInUser = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "SIGN_IN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_IN_ERROR", err });
      });
  };
};

export const signUpUser = (credentials) => {
  return (dispatch, action, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user
          .sendEmailVerification()
          .then(() => {
            dispatch({ type: "SIGN_UP_SUCCESS" });
          })
          .catch((err) => {
            dispatch({ type: "SIGN_UP_EMAIL_FAILED", err });
          });
      })
      .catch((err) => {
        dispatch({ type: "FAILED_TO_CREATE_USER", err });
      });
  };
};

export const signOutUser = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_OUT_ERROR", err });
      });
  };
};

export const checkEmailVerifiedUser = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .currentUser
      .reload()
      .then(() => {
        const user = firebase.auth().currentUser;
        if (user.emailVerified) {
          dispatch({ type: "CHECK_VERFIFIED_EMAIL_SUCCESS", email: user.email});
        }
      })
      .catch((err) => {
        dispatch({ type: "CHECK_VERFIFIED_EMAIL_ERROR", err });
      });
  };
};
