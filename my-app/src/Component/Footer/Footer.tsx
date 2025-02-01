import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { FaHome, FaBook } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";


const Footer: React.FC = () => {
  return (
    <footer
      className=" w-100"
      style={{
        backgroundColor: "#86489e", // Dark Violet
        color: "#FFFFFF", // White text
        padding: ".5rem 0",
      }}
    >
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Navigation Links */}
          <Col>
<Nav className="me-auto w-100 d-flex justify-content-around">
            <Nav.Link
              href="/"
              className="d-flex align-items-center px-3"
              style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: "500" }}
            >
              <FaHome size={25} style={{ marginRight: "7px" }} />
              Principal
            </Nav.Link>
            <Nav.Link
              href="/book"
              className="d-flex align-items-center px-3"
              style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: "500" }}
            >
              <FaBook size={25} style={{ marginRight: "7px" }} />
              Livros
            </Nav.Link>
            <Nav.Link
              href="/collection"
              className="d-flex align-items-center px-3"
              style={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: "500" }}
            >
              <HiCollection size={25} style={{ marginRight: "7px" }} />
              Coleção
            </Nav.Link>
          </Nav>
          </Col>
        </Row>
      </Container>

      {/* Hover Effect */}
      <style>
        {`
          .nav-link:hover {
            color: #A569BD !important; /* Soft Lavender */
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
