export const dispatchAttributes = (attributes) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const email = getState().firebaseAuth.auth.email;
    firestore
      .collection("attributes")
      .doc(email)
      .update({
        attributes,
        email,
      })
      .then(() => {
        console.log("Worked");
        dispatch({ type: "UPDATE_ATTRIBUTES_SUCCESS" });
      })
      .catch((err) => {
        console.log("Not worked", err);
        dispatch({ type: "UPDATE_ATTRIBUTES_ERROR", err });
      });
  };
};
