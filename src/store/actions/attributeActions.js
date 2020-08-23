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
