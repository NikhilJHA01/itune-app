import FormControl from "react-bootstrap/FormControl";
import useDebounce from "../hooks/useDebounce";
import { ItuneState } from "../context/ItuneContext";

const Search = () => {
  const { dispatch } = ItuneState();
  const searchByQuery = (query) => {
    dispatch({ type: "FILTER_BY_SEARCH", payload: query });
  };

  const debounced = useDebounce(searchByQuery, 300);
  return (
    <FormControl
      type="search"
      placeholder="Search a song..."
      aria-label="Search"
      onChange={(e) => debounced(e.target.value)}
    />
  );
};

export default Search;
