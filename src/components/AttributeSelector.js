import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const AttributeSelector = ({ attribute, isChecked, setChecked }) => {
  const checked = isChecked();
  return (
    <FormControlLabel
      control={
        <Checkbox color="default" checked={checked} name={attribute} onChange={setChecked} />
      }
      label={attribute}
    />
  );
};

export default AttributeSelector;
