import Form from "react-bootstrap/Form";
import classes from "./Filters.module.css";

const FilterByCategory = ({
  categoryInput,
  categories,
  dispatchCategoryChange,
}) => {
  return (
    <Form.Select
      className={classes.categoryFilter}
      value={categoryInput}
      size="lg"
      onChange={(e) => dispatchCategoryChange(e.target.value)}
      aria-label="Category Filter"
    >
      <option value="">Filter By Category</option>
      {categories.length > 0 &&
        categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
    </Form.Select>
  );
};

export default FilterByCategory;
