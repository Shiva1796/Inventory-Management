import { useState } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./Form.modules.css";
import FormNav from "./FormNav";

const Form = (props) => {
  const [partNumber, setPartNumber] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState();

  const addPartHandler = (event) => {
    setPartNumber(event.target.value);
  };
  const addPriceHandler = (event) => {
    setPrice(event.target.value);
  };
  const addWeightHandler = (event) => {
    setWeight(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (partNumber.trim(" ").length === 0) {
      setError({
        title: "Invalid part",
        message: "Please enter a valid combination of numbers and letters.",
      });
      return;
    }
    if (price.trim(" ").length === 0 && +price === 0) {
      setError({
        title: "Invalid price",
        message: "The price cannot be less than 0",
      });
      return;
    }
    if (weight.trim(" ").length === 0 && +weight === 0) {
      setError({
        title: "Invalid weight",
        message: "The weight cannot be less than 0",
      });
      return;
    }
    if (
      partNumber.trim(" ").length <= 0 &&
      price.trim(" ").length <= 0 &&
      weight.trim(" ").length <= 0
    ) {
      setError({
        title: "Missing input",
        message: "Please make sure all the fields are filled",
      });
      return;
    }

    props.onPartAdd(partNumber.toUpperCase(), price, weight);
    setPartNumber("");
    setPrice("");
    setWeight("");
    console.log(props.parts);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

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
          min={0}
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
      <FormNav parts={props.parts} />
    </div>
  );
};

export default Form;
