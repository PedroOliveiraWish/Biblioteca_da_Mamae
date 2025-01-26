import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface AboutSectionProps {
  title: string;
  description: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description }) => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center text-center">
        <Col xs={12} md={8}>
          <h1 className="mb-4">{title}</h1>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>{description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
