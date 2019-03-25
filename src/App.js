import React, { useState } from "react";
import "./App.css";
import Entities from "./components/Entities/Entities";

export let setEntities = () => {};
export let entities = [];
export let actions = {
  addValidation: (entityIndex, columnIndex) => {
    entities[0].columns[0].validations.push({});
    setEntities([...entities]);
    console.log(entities);
  },
  addColumn: entityIndex => {
    entities[0].columns.push({
      name: "column1",
      columnType: "@Column()",
      tsType: "string",
      options: "",
      validations: [1]
    });
    setEntities([...entities]);
  }
};

const App = () => {
  [entities, setEntities] = useState([]);
  return (
    <>
      <Entities />
    </>
  );
};

export default App;
