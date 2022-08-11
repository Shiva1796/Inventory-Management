import { useState, useEffect } from "react";

import Card from "../UI/Card";
import classes from "./DisplayList.modules.css";
import ListData from "./ListData";

const DisplayList = (props) => {
  const SubmittedDataMapped = props.parts.map((data) => (
    <ul key={data.partNumber} className={["list-items"]}>
      <li className={"part"}>Part Number: {data.partNumber}</li>
      <li className={"price"}>Price: $ {data.price}</li>
      <li className={"weight"}>Weight: {data.weight} lbs</li>
    </ul>
  ));
  return (
    <Card>
      <ListData />
      {SubmittedDataMapped}
    </Card>
  );
};

export default DisplayList;
