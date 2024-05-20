import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { GitHub, LinkedIn, YouTube, Google, Twitter, Facebook, Instagram } from '@mui/icons-material';
import { Box, IconButton } from "@mui/material";

function Home() {
  return (
    <section>
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

              {/* Social Media Icons */}
              <Box sx={{marginLeft:'32px'}}  display="flex"  mt={4}>
                <IconButton href="https://github.com" target="_blank">
                  <GitHub fontSize="large" style={{ color: "#333" }} />
                </IconButton>
                <IconButton href="https://linkedin.com" target="_blank">
                  <LinkedIn fontSize="large" style={{ color: "#0077b5" }} />
                </IconButton>
                {/* <IconButton href="https://youtube.com" target="_blank">
                  <YouTube fontSize="large" style={{ color: "#ff0000" }} />
                </IconButton> */}
                <IconButton href="https://google.com" target="_blank">
                  <Google fontSize="large" style={{ color: "#db4437" }} />
                </IconButton>
                {/* <IconButton href="https://twitter.com" target="_blank">
                  <Twitter fontSize="large" style={{ color: "#1da1f2" }} />
                </IconButton> */}
                <IconButton href="https://facebook.com" target="_blank">
                  <Facebook fontSize="large" style={{ color: "#1877f2" }} />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank">
                  <Instagram fontSize="large" style={{ color: "#e4405f" }} />
                </IconButton>
              </Box>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
