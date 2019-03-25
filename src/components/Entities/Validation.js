import React, { useState } from "react";
import PropTypes from "prop-types";
import { columnTypes } from "../../constants/columnTypes";
import { validationTypesGroups } from "../../constants/classValidators";

const validationTypesGroupsOptions = validationTypesGroups.map(
  (type, index) => <option key={index}>{type.label}</option>
);

function Validation(props) {
  const { validation } = props;
  const [validationTypesGroup, setValidationTypesGroup] = useState(
    "Common validation"
  );
  const setValidationTypesGroupChange = e => {
    setValidationTypesGroup(e.target.value);
  };
  const [validationType, setValidationType] = useState();
  const validationTypeChange = e => {
    setValidationType(e.target.value);
  };
  const { validationTypes } = validationTypesGroups.find(
    validationTypesGroup2 => {
      return validationTypesGroup2.label == validationTypesGroup;
    }
  );
  // const { validationTypes } = validationTypesGroups[0];
  const validationOptions = validationTypes.map((validation, index) => (
    <option key={index}>{validation.name}</option>
  ));
  return (
    <form style={{ background: "#eeeeee", margin: "10px", padding: "10px" }}>
      columnType
      <select
        value={validationTypesGroup}
        onChange={setValidationTypesGroupChange}
      >
        {validationTypesGroupsOptions}
      </select>
      <select value={validationType} onChange={validationTypeChange}>
        {validationOptions}
      </select>
    </form>
  );
}

export default Validation;
