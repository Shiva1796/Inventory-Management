import Card from "../UI/Card";
import classes from "./DisplayList.modules.css";

const DisplayList = (props) => {
  return (
    <Card>
      <div className={"list"}>
        {props.parts.map((part) => (
          <ul key={part.partNumber} className={["list-items"]}>
            <li>Part Number: {part.partNumber}</li>
            <li>Price: ${part.partPrice}</li>
            <li>Weight: {part.partWeight} lbs</li>
          </ul>
        ))}
      </div>
    </Card>
  );
};

export default DisplayList;
