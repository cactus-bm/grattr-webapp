import React, { useState } from "react";
import { connect } from "react-redux";
import AttributeSelector from "./AttributeSelector";
import { Alert } from "@material-ui/lab";
import { dispatchAttributes } from "../store/actions/attributeActions";
import Moment from "react-moment";

const Dashboard = ({ lastUpdated, updateError, updateAttributes }) => {
  const [state, setState] = useState(user);

  function manipulateState(label, isChecked) {
    let newState = state.filter((x) => x !== label);
    if (isChecked) {
      newState = [...newState, label];
    }
    setState(newState);
    console.log("Firing Attributes");
    updateAttributes(newState);
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

  return (
    <div>
      {selectorList}
      {!updateError && lastUpdated && (
        <Alert severity="success">
          Last synced at <Moment fromNow>{lastUpdated}</Moment>
        </Alert>
      )}
      {updateError && (
        <Alert severity="error">
          {updateError} at <Moment fromNow>{lastUpdated}</Moment>
        </Alert>
      )}
    </div>
  );
};

const labels = ["Male", "Female", "Bermudian", "British", "American"];
const user = ["Male", "British"];

const mapStateToProps = (state) => {
  return {
    lastUpdated: state.attributes.lastUpdated,
    updateError: state.attributes.updateError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAttributes: (attributes) => dispatch(dispatchAttributes(attributes)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
