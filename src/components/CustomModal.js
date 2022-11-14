import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaMusic } from "react-icons/fa";

const CustomModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Row>
          <Col md={4}>
            <img
              style={{ width: "100%" }}
              src={props.song["im:image"][2].label}
              alt="..."
            />
          </Col>
          <Col md={8}>
            <div>
              <h2>{props.song["im:name"].label}</h2>
              <Card.Subtitle>
                <b>Artist:</b> {props.song["im:artist"].label}
              </Card.Subtitle>
              <Card.Subtitle>
                <b>Price: </b>
                {props.song["im:price"].label}
              </Card.Subtitle>
              <Card.Subtitle>
                <b>Release Date:</b>{" "}
                {props.song["im:releaseDate"].attributes.label}
              </Card.Subtitle>
              <Card.Subtitle>
                <b>Category:</b> {props.song["category"].attributes.term}
              </Card.Subtitle>
              <Card.Subtitle>
                <h5>Want to Listen now?</h5>
              </Card.Subtitle>
              <Card.Subtitle>
                <a
                  className="btn btn-success "
                  href={props.song["link"].attributes.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <FaMusic />
                  Listen
                </a>
              </Card.Subtitle>
              <Card.Subtitle> {props.song["rights"].label}</Card.Subtitle>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
