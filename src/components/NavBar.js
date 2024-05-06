import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/img/RayQuek.png";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github2.svg";
import outlook from "../assets/img/outlook.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ray-quek-317394171/">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://github.com/rayquekCW">
                <img src={github} alt="" />
              </a>
              <a href="mailto:ray.quek.2021@scis.smu.edu.sg">
                <img src={outlook} alt="" />
              </a>
            </div>
            {/* <button className="vvd" onClick={()=>onUpdateActiveLink('connect')} href="#connect"><span>Let's Connect</span></button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
