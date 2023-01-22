import React from "react";
import logo from "../assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Navbar.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const NavigatePanel = () => {
  return (
    <div>
      <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <NavbarBrand to="/">
            <Nav.Link as={Link} to="/">
                <img src={logo} height="50" width="50" className="d-inline-block align-top" alt="logo" />
            </Nav.Link>
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Главная</Nav.Link>
                <Nav.Link as={Link} to="/calc">Калькулятор</Nav.Link>
                <Nav.Link as={Link} to="/stopwatch">Секундомер</Nav.Link>
                <Nav.Link as={Link} to="/timer">Таймер</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <div>
        {/* <Routes> */}
          {/* <Route path="/" element={<Main />} /> */}
          {/* <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} /> */}
        {/* </Routes> */}
      </div>
    </div>
  );
};

export default NavigatePanel;
