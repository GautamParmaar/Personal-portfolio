// ProjectCard.js

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard({ imgPath, isBlog, title, description, ghLink, demoLink, imgClassName }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} className={imgClassName} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          {" "}
          GitHub{" "}
        </Button>
        {"\n"}
        {"\n"}

        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {" "}
            Demo{" "}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
