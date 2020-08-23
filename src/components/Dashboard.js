import React, { useState } from "react";
import { connect } from "react-redux";
import AttributeSelector from "./AttributeSelector";
import { Alert } from "@material-ui/lab";
import { dispatchAttributes } from "../store/actions/attributeActions";
import Moment from "react-moment";
import { Container, Typography, Box } from "@material-ui/core";

const Dashboard = ({ lastUpdated, updateError, updateAttributes }) => {
  const [state, setState] = useState(user);

  function manipulateState(label, isChecked) {
    let newState = state.filter((x) => x !== label);
    if (isChecked) {
      newState = [...newState, label];
    }
    setState(newState);
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
    <Container maxWidth="md">
      <Box pt={3} pb={3}>
        <Typography variant="h5" component="h5" gutterBottom>
          My Attributes
        </Typography>
        {selectorList}
        {!updateError && lastUpdated && (
          <Alert severity="success">
            Last synced <Moment fromNow>{lastUpdated}</Moment>
          </Alert>
        )}
        {updateError && (
          <Alert severity="error">
            An error occured <Moment fromNow>{lastUpdated}</Moment>.{" "}
            {updateError}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

const labels = [
  "Male",
  "Female",
  "Bermudian",
  "British",
  "American",
  "Black",
  "White",
  "Mixed",
  "Portugese",
  "Never Married",
  "Married",
  "Remarried",
  "Widowed",
  "Divorced",
  "Legally Separated",
  "Single",
  "Caribbean",
  "Canadian",
  "Azorean",
  "European",
  "Asian",
  "African",
  "Parent",
  "Father",
  "Mother",
  "Grandparent",
  "Carer",
  "Bachellor's Degree",
  "Student",
  "Master's Degree",
  "Doctorate Degree",
  "State Educated",
  "Privately Educated",
  "School Leaving Certificate",
  "Employed",
  "Unemployed",
  "Underemployed",
].sort();
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
