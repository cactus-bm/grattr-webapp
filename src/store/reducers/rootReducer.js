import { combineReducers } from "redux";
import attributeReducer from "./attributeReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  attributes: attributeReducer,
  firestore: firestoreReducer,
  firebaseAuth: firebaseReducer,
});

export default rootReducer;
