import React, { useState } from "react";
import AttributeSelector from "./AttributeSelector";

export default function Dashboard() {
  const [state, setState] = useState(user);

  function manipulateState(label, isChecked) {
    console.log(label, isChecked);
    const removed = state.filter((x) => x !== label);
    if (isChecked) {
      setState([...removed, label]);
    } else {
      setState(removed);
    }
  }

  const isChecked = (label) => {
    return state.includes(label);
  };

  const selectorList =
    labels &&
    labels.map((label) => {
      return (
        <AttributeSelector
          key={"attr_" + label}
          attribute={label}
          isChecked={() => isChecked(label)}
          setChecked={(e) => manipulateState(label, e.target.checked)}
        ></AttributeSelector>
      );
    });

  return <div>{selectorList}</div>;
}

const labels = ["Male", "Female", "Bermudian", "British", "American"];
const user = ["Male", "British"];

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signInUser(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
