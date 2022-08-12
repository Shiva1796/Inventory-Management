import Button from "../UI/Button";
import classes from "./SearchBar.modules.css";

const SearchBar = (props) => {
  return (
    <div className={"search"}>
      <label htmlFor="search" />
      <input id="search" type={"search"} placeholder="Enter query here" />
      <Button type="submit">Search</Button>
    </div>
  );
};

export default SearchBar;
