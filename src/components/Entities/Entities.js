import React, { useState } from "react";
import PropTypes from "prop-types";
import Entity from "./Entity";
import { useCustom } from "../../hooks/entities";

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
  const [state, actions] = useCustom();
  const mappedEntities = state.entities.map((entity, index) => (
    <Entity
      key={index}
      entity={entity}
      // addColumn={() => addColumn(index, entities, setEntities)}
      addColumn={actions.addColumn}
    />
  ));
  return (
    <>
      {mappedEntities}
      <button onClick={actions.addEntity}>New Entity</button>
    </>
  );
}

Entities.propTypes = {};

export default Entities;
