import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Fade top duration={2000}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: 'black' }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
            </Fade>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong> Professional Skillset </strong>
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
