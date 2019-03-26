import React, { useState } from "react";
import PropTypes from "prop-types";
import Entity from "./Entity";

const blankEntity = () => ({
  name: "",
  columns: [
    {
      name: "id",
      type: "@PrimaryGeneratedColumn()",
      tsType: "number",
      options: "",
      validations: []
    }
  ]
});

const addEntity = (entities, setEntities) => {
  const newEntity = blankEntity();
  const newEntities = [...entities, newEntity];
  setEntities(newEntities);
};

const updateEntity = (entities, setEntities, entityIndex, editedEntity) => {
  const newEntities = [...entities];
  newEntities[entityIndex] = editedEntity;
  setEntities(newEntities);
};

const Entities = props => {
  const { entities, setEntities } = props;
  const callAddEntity = addEntity.bind(null, entities, setEntities);
  const callUpdateEntity = updateEntity.bind(null, entities, setEntities);
  const mappedEntities = props.entities.map((entity, index) => (
    <Entity key={index} entity={entity} updateEntity={callUpdateEntity} />
  ));
  return (
    <>
      <button onClick={callAddEntity}>New Entity</button>
      {mappedEntities}
    </>
  );
};

Entities.propTypes = {};

export default Entities;
