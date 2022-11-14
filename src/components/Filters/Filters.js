import { useCallback, useState } from "react";
import { ItuneState } from "../../context/ItuneContext";
import FilterByCategory from "./FilterByCategory";
import FilterByReleaseDate from "./FilterByReleaseDate";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Filters.module.css";

const Filters = () => {
  const {
    state: { categories, releaseDates, filterByCategory, filterByReleaseDates },
    dispatch,
  } = ItuneState();

  const [categoryInput, setCategoryInput] = useState(filterByCategory || "");
  const [dateInput, setDateInput] = useState(filterByReleaseDates || "");

  const dispatchCategoryChange = useCallback((value) => {
    dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: value,
    });
    setCategoryInput(value);
  }, []);

  const dispatchReleaseDateChange = useCallback((value) => {
    dispatch({
      type: "FILTER_BY_RELEASE_DATES",
      payload: value,
    });
    setDateInput(value);
  }, []);

  const resetFilters = () => {
    dispatch({
      type: "FILTER_BY_RELEASE_DATES",
      payload: "",
    });
    dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: "",
    });
    setCategoryInput("");
    setDateInput("");
  };

  return (
    <div className={classes.filters}>
      <Row>
        <Col>
          <FilterByCategory
            categoryInput={categoryInput}
            categories={categories}
            dispatchCategoryChange={dispatchCategoryChange}
          />
        </Col>
        <Col>
          <FilterByReleaseDate
            dateInput={dateInput}
            releaseDates={releaseDates}
            dispatchReleaseDateChange={dispatchReleaseDateChange}
          />
        </Col>
        <Col>
          {(filterByCategory || filterByReleaseDates) && (
            <Button
              className={classes.resetButton}
              size="sm"
              style={{ padding: "10px" }}
              onClick={resetFilters}
              variant="danger"
            >
              Reset Filters
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Filters;
