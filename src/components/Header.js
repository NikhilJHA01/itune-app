import { MdFavoriteBorder } from "react-icons/md";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Navbar fixed="top" className={classes.header}>
      <Container>
        <Navbar.Brand>
          <h1 style={{ color: "#dc3545" }}>
            <Link to="/">ITune</Link>
          </h1>
        </Navbar.Brand>
        <Nav>
          <Link to="/favourites">
            <Button variant="danger">
              <MdFavoriteBorder />
              <span>Favourites</span>
            </Button>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
