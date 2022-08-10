import { useState } from "react";

import SubmitButton from "./SubmitButton";

const Form = (props) => {
  const [partNumber, setPartNumber] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");

  const addPartHandler = (event) => {
    setPartNumber(event.target.value);
  };
  const addPriceHandler = (e) => {
    setPrice(e.target.value);
  };
  const addWeightHandler = (e) => {
    setWeight(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onPartAdd(partNumber, price, weight);
    setPartNumber("");
    setPrice("");
    setWeight("");
  };

  return (
    <form onSubmit={submitHandler}>
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

      <SubmitButton />
    </form>
  );
};

export default Form;
