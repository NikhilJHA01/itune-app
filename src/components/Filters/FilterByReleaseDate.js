import Form from "react-bootstrap/Form";

const FilterByReleaseDate = ({
  dateInput,
  releaseDates,
  dispatchReleaseDateChange,
}) => {
  return (
    <Form.Select
      value={dateInput}
      size="lg"
      onChange={(e) => dispatchReleaseDateChange(e.target.value)}
      aria-label="Filter By Release dates"
    >
      <option value="">Filter By Release Date</option>
      {releaseDates.length > 0 &&
        releaseDates.map((date, index) => (
          <option key={index} value={date}>
            {date}
          </option>
        ))}
    </Form.Select>
  );
};

export default FilterByReleaseDate;
