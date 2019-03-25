import React, { useState } from "react";
import PropTypes from "prop-types";
import Entity from "./Entity";
import { entities, setEntities } from "../../App";

const addColumn = (entityIndex, entities, setEntities) => {
  entities[entityIndex].columns.push({
    name: "column1",
    columnType: "@Column()",
    tsType: "string",
    options: "",
    validations: [1]
  });
  setEntities([...entities]);
};

function Entities(props) {
  const click = () => {
    const entity = {
      unique: [],
      name: "a",
      columns: [
        {
          name: "id",
          type: "@PrimaryGeneratedColumn()",
          tsType: "number",
          options: "",
          validations: [1]
        }
      ]
    };
    setEntities([...entities, entity]);
  };
  const mappedEntities = entities.map((entity, index) => (
    <Entity
      key={index}
      entity={entity}
      addColumn={() => addColumn(index, entities, setEntities)}
    />
  ));
  return (
    <>
      {mappedEntities}
      <button onClick={click}>New Entity</button>
    </>
  );
}

Entities.propTypes = {};

export default Entities;
