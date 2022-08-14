import { useState } from "react";

import classes from "./NavForm.modules.css";
import Card from "../UI/Card";

const FormNav = (props) => {
  const [dollar, setDollar] = useState();

  const dollarChangeHandler = () => {
    setDollar(props.parts.price * 2);
    console.log(props.parts);
  };
  return (
    <Card className={"card"}>
      <div className={"part"}>
        <p>Part Number</p>
      </div>
      <div className={"price"}>
        <p>Price</p>
        <select>
          <option onClick={dollarChangeHandler}>US Dollars $</option>
          <option>Great Britain Pound £ </option>
          <option>Euro €</option>
          <option>Canadian Dollars $</option>
        </select>
      </div>
      <div className={"weight"}>
        <p>Weight</p>
        <select>
          <option>Kilograms</option>
          <option>Pounds </option>
        </select>
      </div>
    </Card>
  );
};

export default FormNav;
