import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Fade top duration={2000}>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
        </Fade>
        <Fade top duration={2000}>
          <p style={{ color: "black" }}>
            Here are a few projects I've worked on recently.
          </p>
        </Fade>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Fade top duration={2000}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/epharma.jpeg"
                imgClassName="fixed-size-image"
                isBlog={false}
                title="E-Pharmacy Store"
                description="Developed an e-pharmacy store with an integrated payment gateway, featuring a user-friendly admin portal for efficient order management and product updates."
                ghLink="https://github.com/soumyajit4419/Chatify"
                demoLink="https://ecom2-c701c.web.app/"
              />
            </Col>
          </Fade>

          <Fade top duration={2000}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/boost.png"
                imgClassName="fixed-size-image"
                isBlog={false}
                title="BOOST-IoT Dashboard"
                description="An effective web application for controlling and managing IoT devices developed by BOOST IoT Club."
                ghLink="https://github.com/GautamParmaar/BOOST-IoT-Dashboard"
                // demoLink="https://blogs.soumya-jit.tech/"
              />
            </Col>
          </Fade>

          <Fade top duration={2000}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/recipe.jpeg"
                imgClassName="fixed-size-image"
                isBlog={false}
                title="Recipe Finder"
                description="Discover delicious recipes with our Recipe Finder app! Enter any ingredient and instantly get a variety of recipes with detailed instructions. Perfect for all home cooks!"
                ghLink="https://github.com/GautamParmaar/RecipeFinder"
                demoLink="https://recipefinder123.web.app/"
              />
            </Col>
          </Fade>

          <Fade top duration={2000}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath="/chat.png"
                imgClassName="fixed-size-image"
                isBlog={false}
                title="Chat Application"
                description="Introducing our Group Chat application built with Node.js! This straightforward app lets users join chat rooms and send messages in real-time. Perfect for easy and quick group communication."
                ghLink="https://github.com/GautamParmaar/Chat-Application"
              />
            </Col>
          </Fade>

          {/* <Fade top duration={2000}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={suicide}
                imgClassName="fixed-size-image"
                isBlog={false}
                title="Ai For Social Good"
                description="Using 'Natural Language Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in suicide prevention."
                ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
                // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              />
            </Col>
          </Fade> */}

          {/* <Fade top duration={2000}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emotion}
                imgClassName="fixed-size-image"
                isBlog={false}
                title="Face Recognition and Emotion Detection"
                description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backend. The classifier successfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifier to predict the emotion of a person."
                ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
                // demoLink="https://blogs.soumya-jit.tech/"
              />
            </Col>
          </Fade> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
