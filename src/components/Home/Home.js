import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import { LinkedIn, Facebook, Instagram } from '@mui/icons-material';
import { Box, IconButton } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import About from "../About/About";
import Projects from "../Projects/Projects";
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  return (
    <section className="">
      <Container fluid className="home-section marginClass" id="home">
        {/* <Particle /> */}
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
                src="/Gautam_copy.jpg"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: '50%', marginTop: '15px' }}
              />
            </Col>
          </Row>

          {/* Social Media Icons for Large Screens */}
          <Box className="social-icons-large">
            <IconButton href="https://github.com/GautamParmaar" target="_blank">
              <GitHubIcon fontSize="large" style={{ color: "#333" }}/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/gautam-parmar-7436b0212/" target="_blank">
              <LinkedIn fontSize="large" style={{ color: "#0077b5" }} />
            </IconButton>
            <IconButton href="https://www.facebook.com/profile.php?id=100010939179711&mibextid=ZbWKwL" target="_blank">
              <Facebook fontSize="large" style={{ color: "#1877f2" }} />
            </IconButton>
            <IconButton href="https://www.instagram.com/gautam_parmaar?igsh=b3Z1bGhoMDI1bDdp" target="_blank">
              <Instagram fontSize="large" style={{ color: "#e4405f" }} />
            </IconButton>
          </Box>

          {/* Social Media Icons for Small Screens */}
          <Box className="social-icons-small">
            <IconButton href="https://github.com/GautamParmaar" target="_blank">
              <GitHubIcon fontSize="large" style={{ color: "#333" }}/>
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/gautam-parmar-7436b0212/" target="_blank">
              <LinkedIn fontSize="large" style={{ color: "#0077b5" }} />
            </IconButton>
            <IconButton href="https://www.facebook.com/profile.php?id=100010939179711&mibextid=ZbWKwL" target="_blank">
              <Facebook fontSize="large" style={{ color: "#1877f2" }} />
            </IconButton>
            <IconButton href="https://www.instagram.com/gautam_parmaar?igsh=b3Z1bGhoMDI1bDdp" target="_blank">
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
