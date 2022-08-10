const DisplayList = (props) => {
  return (
    <ul>
      {props.parts.map((part) => (
        <li key={part.partNumber}>
          {part.partNumber} ${part.partPrice} {part.partWeight} lbs
        </li>
      ))}
    </ul>
  );
};

export default DisplayList;
