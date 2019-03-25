import { useState } from "react";
let state = { entities: [] };
let dispatchers = [];
const runDispatchers = () => {
  dispatchers.forEach(dispatcher => {
    dispatcher(state);
  });
};
const setState = newState => {
  state = newState;
  runDispatchers();
};

export const useCustom = () => {
  const dispatcher = useState()[1];
  if (!dispatchers.includes(dispatcher)) {
    dispatchers.push(dispatcher);
  }
  return [state, actions];
};

export let actions = {
  addValidation: (entityIndex, columnIndex) => {
    const { entities } = state;
    entities[0].columns[0].validations.push({});
    setState({ entities: [...entities] });
  },
  addColumn: entityIndex => {
    const { entities } = state;
    entities[0].columns.push({
      name: "column1",
      columnType: "@Column()",
      tsType: "string",
      options: "",
      validations: [1]
    });
    setState({ entities: [...entities] });
  },
  addEntity: () => {
    const { entities } = state;
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
    setState({ entities: [...entities, entity] });
  }
};
