import React from "react";
import "./Practice.css";
import { Row, Col, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <Row>
              <h1 className="practice-text m-5">Take Practice Test</h1>
            </Row>
            <Row>
              <Link to="/freetest">
                <Image
                  src="/assets/freeTest.png"
                  roundedCircle
                  className="practice-pic practice-text"
                />
              </Link>
            </Row>
            <Row>
              <h5 className="practice-text m-3">
                AN EASY WAY TO STUDY BORING STUFF
              </h5>
            </Row>
          </Col>

          {/* Our page video will be put.
            <Col className=" m-5" xs={12} md={5}>
              <VideoWatch />
            </Col> */}
        </Row>
      </Container>
    );
  }
}
export default Practice;
