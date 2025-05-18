import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/epharma.jpeg"
              imgClassName="fixed-size-image"
              isBlog={false}
              title="E-Pharmacy Store"
              description="Developed an e-pharmacy store with an integrated payment gateway, featuring a user-friendly admin portal for efficient order management and product updates."
              ghLink="https://github.com/GautamParmaar/ecom3"
              demoLink="https://ecom2-c701c.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/davvlogo.png"
              imgClassName="fixed-size-image"
              isBlog={false}
              title="School of Life Sciences College website"
              description="Developed a responsive and user-friendly website for the School of Life Sciences, featuring sections for faculty, research, and admissions. Focused on clean design, intuitive navigation, and modern web technologies."
              demoLink="https://sls.dauniv.ac.in/"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                objectFit:'contain'
              }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://boost-iot.vercel.app/images/mainHome-img.png"
              imgClassName="fixed-size-image"
              isBlog={false}
              title="BOOST-IoT Dashboard"
              description="An effective web application for controlling and managing IoT devices developed by BOOST IoT Club."
              ghLink="https://github.com/GautamParmaar/BOOST-IoT-Dashboard"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/chat.png"
              imgClassName="fixed-size-image"
              isBlog={false}
              title="Chat Application"
              description="Introducing our Group Chat application built with Node.js! This straightforward app lets users join chat rooms and send messages in real-time. Perfect for easy and quick group communication.






"
              ghLink="https://github.com/GautamParmaar/Chat-Application"
              
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
