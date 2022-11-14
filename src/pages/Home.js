import Song from "../components/Song";
import Filters from "../components/Filters/Filters";
import { ItuneState } from "../context/ItuneContext";
import NoData from "../components/NoData";
import Search from "../components/Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Home.module.css";

const Home = () => {
  const {
    state: { songs, searchQuery, filterByCategory, filterByReleaseDates },
  } = ItuneState();

  const filteredSongs = () => {
    let filteredSongs = songs;

    if (searchQuery) {
      filteredSongs = filteredSongs.filter(function (i) {
        return i["im:name"].label
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      });
    }
    if (filterByCategory) {
      filteredSongs = filteredSongs.filter(function (i) {
        return i.category.attributes.label
          .toLowerCase()
          .includes(filterByCategory.toLowerCase());
      });
    }

    if (filterByReleaseDates) {
      filteredSongs = filteredSongs.filter(function (i) {
        return i["im:releaseDate"].attributes.label
          .toLowerCase()
          .includes(filterByReleaseDates.toLowerCase());
      });
    }

    return filteredSongs;
  };

  return (
    <main className={classes.mainContainer}>
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <Search />
          </Col>
          <Col xs={12} md={8}>
            <Filters />
          </Col>
        </Row>
        <Row>
          <div className={classes.songsContainer}>
            {filteredSongs().length > 0 ? (
              filteredSongs().map((song) => {
                return (
                  <Col key={song.id.attributes["im:id"]} xs={12} sm={6} md={4}>
                    <Song song={song} />
                  </Col>
                );
              })
            ) : (
              <NoData>
                <h1>No Songs Available!</h1>
              </NoData>
            )}
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
