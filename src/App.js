import { useState } from "react";

import DisplayList from "./components/List/DisplayList";
import classes from "./App.modules.css";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [partsList, setPartsList] = useState([]);

  const onPartAddHandler = (part, price, weight) => {
    setPartsList((prevPartList) => {
      return [
        ...prevPartList,
        { partNumber: part, price: price, weight: weight },
      ];
    });
  };

  return (
    <div className={["main-body"]}>
      <Navbar />
      <Form onPartAdd={onPartAddHandler} parts={partsList} />
      <DisplayList parts={partsList} />
    </div>
  );
}

export default App;
