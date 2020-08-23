import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";

//stackoverflow.com/questions/60456547/reactjs-manage-multiple-checkbox-inputs-with-usestate

const AttributeSelector = ({ attribute, isChecked, setChecked }) => {
  console.log(attribute, isChecked());
  const checked = isChecked();
  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} name={attribute} onChange={setChecked} />
      }
      label={attribute}
    />
  );
};

export default AttributeSelector;
