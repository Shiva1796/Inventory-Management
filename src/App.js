import { useState } from "react";
import DisplayList from "./components/Form/DisplayList";
import classes from "./App.modules.css";

import Form from "./components/Form/Form";

function App() {
  const [partsList, setPartsList] = useState([]);

  const onPartAddHandler = (part, price, weight) => {
    setPartsList((prevPartList) => {
      return [
        ...prevPartList,
        { partNumber: part, partPrice: price, partWeight: weight },
      ];
    });
  };

  return (
    <div className={["main-body"]}>
      <Form onPartAdd={onPartAddHandler} />
      <DisplayList parts={partsList} />
    </div>
  );
}

export default App;
