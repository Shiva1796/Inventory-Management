import Card from "../UI/Card";
import classes from "./DisplayList.modules.css";

const DisplayList = (props) => {
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
