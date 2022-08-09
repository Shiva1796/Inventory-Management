import { useState } from "react";

const Input = () => {
  const [partNumber, setPartNumber] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");

  const addPartHandler = (e) => {
    setPartNumber(e.target.value);
  };
  const addPriceHandler = (e) => {
    setPrice(e.target.value);
  };
  const addWeightHandler = (e) => {
    setWeight(e.target.value);
  };

  return (
    <div>
      <label htmlFor="part" />
      <input
        value={partNumber}
        onChange={addPartHandler}
        id="part"
        placeholder="Part number"
        type={"text"}
      />
      <label htmlFor="price" />
      <input
        value={price}
        onChange={addPriceHandler}
        min={1}
        id="price"
        placeholder="Price"
        type={"number"}
      />
      <label htmlFor="weight" />
      <input
        value={weight}
        onChange={addWeightHandler}
        min={0}
        id="weight"
        placeholder="Weight"
        type={"number"}
      />
    </div>
  );
};

export default Input;
