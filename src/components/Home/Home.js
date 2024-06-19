// Home.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { LinkedIn, Google, Facebook, Instagram } from '@mui/icons-material';
import { Box, IconButton } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import "../CSS/Home.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  return (
    <section className="marginClass">
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, color: 'black' }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 style={{ color: 'black' }} className="heading-name">
                I'M
                <strong className="main-name"> Gautam Parmar</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="/gautam.jpg"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: '50%', marginTop: '15px' }}
              />
            </Col>
          </Row>

          {/* Social Media Icons */}
          <Box 
            className={`social-icons ${isSmallScreen ? "social-icons-small" : "social-icons-large"}`}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton href="https://github.com/GautamParmaar" target="_blank">
              <GitHubIcon fontSize="large" style={{ color: "#333" }}/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/yourprofile" target="_blank">
              <LinkedIn fontSize="large" style={{ color: "#0077b5" }} />
            </IconButton>
            <IconButton href="https://plus.google.com/yourprofile" target="_blank">
              <Google fontSize="large" style={{ color: "#db4437" }} />
            </IconButton>
            <IconButton href="https://www.facebook.com/yourprofile" target="_blank">
              <Facebook fontSize="large" style={{ color: "#1877f2" }} />
            </IconButton>
            <IconButton href="https://www.instagram.com/yourprofile" target="_blank">
              <Instagram fontSize="large" style={{ color: "#e4405f" }} />
            </IconButton>
          </Box>
        </Container>
      </Container>
      <Home2 />
      <About />
      <Projects />
    </section>
  );
}

export default Home;
