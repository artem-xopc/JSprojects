import React from "react";
import logo from "../assets/logo.png";
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

const NavigatePanel = () => {
  return (
    <div>
      <Navbar>
        <Container>
            <Navbar.Brand>
                <Nav.Link to="/"></Nav.Link>
            </Navbar.Brand>
        </Container>
      </Navbar>
      <div class="">
          <span>
            <img src={logo} class="" />
          </span>
          <span class="stop_link">
            <a href="/">Stopwatch</a>
          </span>
          <span class="timer_link">
            <a href="/">Timer</a>
          </span>
        </div>
    </div>
  );
};

export default NavigatePanel;
