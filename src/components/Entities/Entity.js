import React, { useState } from "react";
import PropTypes from "prop-types";
import Column from "./Column";

function Entity(props) {
  // const { entity } = props;
  const { entity, addColumn } = props;
  const { columns } = entity;
  const mappedColumns = columns.map((column, index) => (
    <Column key={index} column={column} />
  ));

  return (
    <>
      <form style={{ background: "#eeeeee", margin: "10px", padding: "10px" }}>
        name
        <input value={entity.name} />
        <button type="button" onClick={addColumn}>
          add column
        </button>
        {mappedColumns}
      </form>
    </>
  );
}

export default Entity;
