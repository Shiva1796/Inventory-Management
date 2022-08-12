import Button from "../UI/Button";
import classes from "./SearchBar.modules.css";

const SearchBar = () => {
  return (
    <div className={["search-body"]}>
      <div className={"search"}>
        <label htmlFor="search">Search </label>
        <input id="search" type={"search"} placeholder="Enter query here" />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
