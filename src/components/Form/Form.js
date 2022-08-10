import { useState } from "react";

import Button from "../UI/Button";
import classes from "./Form.modules.css";

const Form = (props) => {
  const [partNumber, setPartNumber] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState();

  const addPartHandler = (event) => {
    setPartNumber(event.target.value);
  };
  const addPriceHandler = (e) => {
    setPrice(e.target.value);
  };
  const addWeightHandler = (e) => {
    setWeight(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (partNumber.trim(" ").length <= 0) {
    } else {
      props.onPartAdd(partNumber, price, weight);
      setPartNumber("");
      setPrice("");
      setWeight("");
    }
  };

  return (
    <div>
      <form className={["input-form"]} onSubmit={submitHandler}>
        <label htmlFor="part">Part Number: </label>
        <input
          value={partNumber}
          onChange={addPartHandler}
          id="part"
          placeholder="Part number"
          type="text"
        />
        <label htmlFor="price">Price: </label>
        <input
          value={price}
          onChange={addPriceHandler}
          min={1}
          id="price"
          placeholder="Price"
          type={"number"}
        />
        <label htmlFor="weight">Weight: </label>
        <input
          value={weight}
          onChange={addWeightHandler}
          min={0}
          id="weight"
          placeholder="Weight"
          type={"number"}
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
