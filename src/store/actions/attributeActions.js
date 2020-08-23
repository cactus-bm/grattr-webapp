export const dispatchAttributes = (attributes) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const email = getState().firebaseAuth.auth.email;
    firestore
      .collection("attributes")
      .doc(email)
      .set({
        attributes,
        email,
      })
      .then(() => {
        dispatch({ type: "UPDATE_ATTRIBUTES_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "UPDATE_ATTRIBUTES_ERROR", err });
      });
  };
};

export const dispatchGetAttributes = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const email = getState().firebaseAuth.auth.email;
    firestore
      .collection("attributes")
      .doc(email)
      .get()
      .then(snapshot => {
        dispatch({ type: "GET_ATTRIBUTES_SUCCESS", snapshot });
      })
      .catch((err) => {
        dispatch({ type: "GET_ATTRIBUTES_ERROR", err });
      });
  };
};