import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LuLibrary } from "react-icons/lu";
import { FaHome, FaBook } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";

const Header: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      className="py-2 w-100"
      style={{ backgroundColor: "#86489e", color: "#FFFFFF" }}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="/"
          style={{
            color: "#FFFFFF",
            fontSize: "1.5rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <LuLibrary size={30} style={{ marginRight: "10px" }} />
          Biblioteca da Mamãe
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: "#FFFFFF" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
