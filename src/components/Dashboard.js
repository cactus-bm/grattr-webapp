import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AttributeSelector from "./AttributeSelector";
import Whirligig from "./Whirligig";
import { Alert } from "@material-ui/lab";
import {
  dispatchAttributes,
  dispatchGetAttributes,
} from "../store/actions/attributeActions";
import Moment from "react-moment";
import {
  Container,
  Typography,
  Box,
  Divider,
  InputLabel,
  TextField,
} from "@material-ui/core";

const Dashboard = ({
  lastUpdated,
  updateError,
  updateAttributes,
  email,
  snapshot,
  getAttributes,
}) => {
  const [state, setState] = useState(null);
  const [customAttribute, setCustomAttribute] = useState("");

  useEffect(() => {
    getAttributes();
  }, [getAttributes]);

  if (snapshot == null) {
    return <Whirligig></Whirligig>;
  }

  if (state === null) {
    setState(snapshot);
    return <Whirligig></Whirligig>;
  }

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
      <Box pt={7} pb={3}>
        <Typography variant="h6" component="h6">
          Attributes for {email}
        </Typography>
        <Box pt={3} pb={3}>
          <Divider mt={5} />
        </Box>
        {selectorList}
        {!updateError && lastUpdated && (
          <Box pt={3} pb={3}>
            <Alert severity="success">
              Last synced <Moment fromNow>{lastUpdated}</Moment>
            </Alert>
          </Box>
        )}
        {updateError && (
          <Box pt={3} pb={3}>
            <Alert severity="error">
              An error occured <Moment fromNow>{lastUpdated}</Moment>.{" "}
              {updateError}
            </Alert>
          </Box>
        )}
        <Box pt={3} pb={3}>
          <Divider mt={5} />
        </Box>
        <InputLabel htmlFor="custom-attribute">
          Add custom attribute:
        </InputLabel>
        <TextField
          id="custom-attribute"
          mt={50}
          value={customAttribute}
          onChange={(e) => setCustomAttribute(e.target.value)}
        />
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

const mapStateToProps = (state) => {
  return {
    lastUpdated: state.attributes.lastUpdated,
    updateError: state.attributes.updateError,
    email: state.firebaseAuth.auth.email,
    snapshot: state.attributes.snapshot,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAttributes: (attributes) => dispatch(dispatchAttributes(attributes)),
    getAttributes: () => dispatch(dispatchGetAttributes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

