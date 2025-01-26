import React from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import { LuLibrary } from "react-icons/lu";
import { FaHome, FaBook, FaEnvelope, FaGithub } from "react-icons/fa";

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
          {/* Brand and Copyright */}
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <h5
              className="d-flex align-items-center"
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              <LuLibrary size={30} style={{ marginRight: "10px" }} />
              Biblioteca da Mamãe
            </h5>
            <small>© 2025 Todos os direitos reservados.</small>
          </Col>

          {/* Navigation Links */}
          <Col xs={12} md={6}>
            <Nav className="justify-content-center justify-content-md-end">
              <Nav.Link
                href="#"
                className="text-white d-flex align-items-center"
                style={{
                  fontSize: "1rem",
                  margin: "0 0.5rem",
                  transition: "color 0.3s",
                }}
              >
                <FaHome size={25} style={{ marginRight: "7px" }} />
                Página Inicial
              </Nav.Link>
              <Nav.Link
                href="#"
                className="text-white d-flex align-items-center"
                style={{
                  fontSize: "1rem",
                  margin: "0 0.5rem",
                  transition: "color 0.3s",
                }}
              >
                <FaBook size={25} style={{ marginRight: "7px" }} />
                Livros
              </Nav.Link>
              <Nav.Link
                href="mailto:support@example.com"
                className="text-white d-flex align-items-center"
                style={{
                  fontSize: "1rem",
                  margin: "0 0.5rem",
                  transition: "color 0.3s",
                }}
              >
                <FaEnvelope size={25} style={{ marginRight: "7px" }} />
                Contato
              </Nav.Link>
              <Nav.Link
                href="https://github.com"
                target="_blank"
                className="text-white d-flex align-items-center"
                style={{
                  fontSize: "1rem",
                  margin: "0 0.5rem",
                  transition: "color 0.3s",
                }}
              >
                <FaGithub size={25} style={{ marginRight: "7px" }} />
                GitHub
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
