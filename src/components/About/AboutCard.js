import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gautam Parmar </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            I'm a passionate web developer with a love for creating dynamic and responsive websites. My journey into web development began two years ago, and since then, I have dedicated myself to mastering the art and science of building user-friendly, efficient, and visually appealing web applications.<br/><br/>
            Currently, I'm pursuing <span className="purple"> MCA </span>(Master's of Computer Applications) from<span className="purple">  SCSIT DAVV Indore </span>, where I also completed my <span className="purple">BCA </span>(Bachelor's of Computer Applications).
            <br />
            <br />
          </p>
          <ul>
            {/* <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li> */}
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
