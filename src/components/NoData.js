import classes from "./NoData.module.css";
const NoData = ({ children }) => {
  return <div className={classes.noData}>{children}</div>;
};

export default NoData;
