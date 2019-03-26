import React, { useState } from "react";
import "./App.css";
import Entities from "./components/Entities/Entities";

const App = () => {
  const [entities, setEntities] = useState([]);
  return (
    <>
      <Entities entities={entities} setEntities={setEntities} />
    </>
  );
};

export default App;
