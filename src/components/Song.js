import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ItuneState } from "../context/ItuneContext";
import LazyLoadImage from "./LazyLoadImage";
import CustomModal from "./CustomModal";
import classes from "./Song.module.css";

const Song = ({ song }) => {
  const [modalShow, setModalShow] = useState(false);
  const {
    dispatch,
    state: { favourites },
  } = ItuneState();
  return (
    <div className={classes.song}>
      <Card>
        <LazyLoadImage src={song["im:image"][2].label} alt="Song Image" />
        <Card.Body>
          <Card.Title>{song["im:name"].label}</Card.Title>
          <Card.Subtitle>
            <b>Artist:</b> {song["im:artist"].label}
          </Card.Subtitle>
          <Card.Subtitle>
            <b>Price:</b> {song["im:price"].label}
          </Card.Subtitle>
          <Card.Subtitle>
            <b>Category:</b> {song.category.attributes.label}
          </Card.Subtitle>
          <Card.Subtitle>
            <b>Release date:</b> {song["im:releaseDate"].attributes.label}
          </Card.Subtitle>
          <Card.Subtitle>
            <Button
              variant="outline-primary"
              onClick={() => setModalShow(true)}
            >
              Preview
            </Button>
          </Card.Subtitle>
          <Card.Subtitle>
            {favourites.some(
              (p) => p.id.attributes["im:id"] === song.id.attributes["im:id"]
            ) ? (
              <Button
                variant="outline-danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_FAVOURITES",
                    payload: song,
                  })
                }
              >
                Remove from Favourites
              </Button>
            ) : (
              <Button
                variant="outline-danger"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_FAVOURITES",
                    payload: song,
                  })
                }
              >
                <MdFavoriteBorder />
                Add to Favourites
              </Button>
            )}
          </Card.Subtitle>
        </Card.Body>
      </Card>

      <CustomModal
        song={song}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Song;
