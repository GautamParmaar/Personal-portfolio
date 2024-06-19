import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
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
            <Fade left duration={2000}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: 'black' }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Fade>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Fade right duration={2000}>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Fade>
          </Col>
        </Row>
        <Fade left duration={2000}>
          <h1 className="project-heading">
            <strong> Professional Skillset </strong>
          </h1>
        </Fade>
        <Fade left duration={2000}>
          <Techstack />
        </Fade>
      </Container>
    </Container>
  );
}

export default About;
