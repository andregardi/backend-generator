import React, { useState } from "react";
import PropTypes from "prop-types";
import Column from "./Column";

const blankColumn = () => ({
  name: "",
  type: "@Column()",
  tsType: "string",
  options: "",
  validations: []
});

const addColumn = (entity, updateEntity) => {
  console.log(entity);
  const editedEntity = { ...entity };
  console.log(editedEntity);
  editedEntity.columns.push(blankColumn());
  updateEntity(editedEntity);
};

const mapColumns = (column, index) => <Column key={index} column={column} />;

function Entity(props) {
  const { entity, updateEntity } = props;
  const { columns } = entity;
  const mappedColumns = columns.map(mapColumns);
  const callAddColumn = addColumn.bind(null, entity, updateEntity);
  return (
    <>
      <form style={{ background: "#eeeeee", margin: "10px", padding: "10px" }}>
        name
        <input value={entity.name} />
        <button type="button" onClick={callAddColumn}>
          add column
        </button>
        {mappedColumns}
      </form>
    </>
  );
}

export default Entity;
