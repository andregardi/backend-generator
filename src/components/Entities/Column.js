import React, { useState } from "react";
import PropTypes from "prop-types";

import { columnTypes } from "../../constants/columnTypes";
import Validation from "./Validation";
import { actions, entities, setEntities } from "../../App";

function Column(props) {
  const { column } = props;
  const { validations } = column;
  const columnTypesOptions = columnTypes.map((columnType, index) => (
    <option key={index}>{columnType}</option>
  ));
  const mappedValidations = validations.map((validation, index) => (
    <Validation key={index} validation={validation} />
  ));
  return (
    <>
      <form style={{ background: "#ffffff", margin: "10px", padding: "10px" }}>
        name
        <input value={column.name} />
        <br />
        Variable Type
        <input value={column.tsType} />
        <br />
        columnType
        <select>{columnTypesOptions}</select>
        <br />
        Column Options
        <input value={column.options} />
        <a
          href="https://typeorm.io/#/entities/column-options"
          target="_blank"
          rel="noopener noreferrer"
        >
          What is this?
        </a>
        <br />
        <button type="button" onClick={actions.addValidation}>
          Add Validation
        </button>
        <br />
        {mappedValidations}
      </form>
    </>
  );
}

export default Column;
