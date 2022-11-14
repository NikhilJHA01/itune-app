import { MdFavoriteBorder } from "react-icons/md";
import { ItuneState } from "../context/ItuneContext";
import Song from "../components/Song";
import NoData from "../components/NoData";
import classes from "./Favourites.module.css";
import Col from "react-bootstrap/Col";

const Favourites = () => {
  const {
    state: { favourites },
  } = ItuneState();
  return (
    <div className={classes.favorites}>
      {favourites.length > 0 ? (
        favourites.map((song) => {
          return (
            <Col key={song.id.attributes["im:id"]} xs={12} sm={6} md={4}>
              <Song song={song} />
            </Col>
          );
        })
      ) : (
        <NoData>
          <h1>
            <MdFavoriteBorder className={classes.favouriteIcon} />
            Favourite list is empty!
          </h1>
        </NoData>
      )}
    </div>
  );
};

export default Favourites;
