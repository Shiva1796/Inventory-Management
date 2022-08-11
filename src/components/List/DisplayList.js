import { useState, useEffect } from "react";

import Card from "../UI/Card";
import classes from "./DisplayList.modules.css";

const DisplayList = (props) => {
  const [parts, setLoadedParts] = useState([]);
  useEffect(() => {
    const FetchParts = async () => {
      const response = await fetch(
        "https://inventory-management-ad87c-default-rtdb.firebaseio.com/parts/"
      );
      const responseData = await response.json();

      const loadedParts = [];
      for (const id in responseData) {
        loadedParts.push({
          id: id,
          partNumber: responseData[id].partNumber,
          price: responseData[id].price,
          weight: responseData[id].weight,
        });
        setLoadedParts(loadedParts);
        console.log(responseData);
      }
      FetchParts();
    };
  }, []);

  return (
    <div className={"list"}>
      {props.parts.map((part) => (
        <ul key={part.partNumber} className={["list-items"]}>
          <Card className={"card"}>
            <li className={"part"}>Part Number: {part.partNumber}</li>
            <li className={"price"}>Price: $ {part.partPrice}</li>
            <li className={"weight"}>Weight: {part.partWeight} lbs</li>
          </Card>
        </ul>
      ))}
    </div>
  );
};

export default DisplayList;
