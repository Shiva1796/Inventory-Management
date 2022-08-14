import classes from "./ListData.modules.css";

const ListData = (props) => {
  const DATA = [
    {
      partNumber: "CS045",
      price: 100,
      weight: 100,
    },
    {
      partNumber: "CS098",
      price: 120,
      weight: 100,
    },
    {
      partNumber: "CS168",
      price: 50,
      weight: 25,
    },
    {
      partNumber: "CS165",
      price: 190,
      weight: 70,
    },
  ];

  const DataMapped = DATA.map((data) => (
    <ul key={data.partNumber} className={["list-items"]}>
      <li className={"part"}>{data.partNumber}</li>
      <li className={"price"}>{data.price}</li>
      <li className={"weight"}>{data.weight}</li>
    </ul>
  ));
  return (
    <div className={"data"} mappeddata={DataMapped}>
      {DataMapped}
    </div>
  );
};

export default ListData;
