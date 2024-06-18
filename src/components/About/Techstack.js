import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit, DiJava } from "react-icons/di";
import { SiFirebase, SiExpress, SiHtml5, SiCss3, SiMysql } from "react-icons/si";
import Tooltip from '@mui/material/Tooltip';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="C++" arrow>
          <span><CgCPlusPlus /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="JavaScript" arrow>
          <span><DiJavascript1 /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="Node.js" arrow>
          <span><DiNodejs /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="React" arrow>
          <span><DiReact /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="MongoDB" arrow>
          <span><DiMongodb /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="Git" arrow>
          <span><DiGit /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="Firebase" arrow>
          <span><SiFirebase /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="Java" arrow>
          <span><DiJava /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="ExpressJS" arrow>
          <span><SiExpress /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="HTML" arrow>
          <span><SiHtml5 /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="CSS" arrow>
          <span><SiCss3 /></span>
        </Tooltip>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tooltip title="MySQL" arrow>
          <span><SiMysql /></span>
        </Tooltip>
      </Col>
    </Row>
  );
}

export default Techstack;
