import React, { useState } from "react";
import PropTypes from "prop-types";
import Column from "./Column";
import { entities, setEntities, actions } from "../../App";

// import { useStore } from "../../hooks/entities";

let state = { count: { count: 0 } };
let dispatchers = [];
const runDispatchers = () => {
  dispatchers.forEach(dispatcher => {
    dispatcher({});
  });
};
const setState = newState => {
  state = newState;
  runDispatchers();
};

const useStore = () => {
  const dispatcher = useState()[1];
  if (!dispatchers.includes(dispatcher)) {
    dispatchers.push(dispatcher);
  }
  return [{ ...state }, setState];
};

function Entity(props) {
  const { entity } = props;
  // const { entity, addColumn } = props;
  const { columns } = entity;
  const mappedColumns = columns.map((column, index) => (
    <Column key={index} column={column} />
  ));
  const addColumn = actions.addColumn.bind(0);
  const [state, setState] = useStore();
  const { count } = state.count;

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
