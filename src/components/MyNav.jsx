import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../data/logo.png";

const MyNav = () => (
  <Navbar expand="lg" className="navbar-dark navbar" style={{ backgroundColor: "#221f1f", paddingInline: "4px" }}>
    <Container fluid>
      <Navbar.Brand href="#">
        <img src={logo} alt="logo" style={{ width: "100px", height: "55px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" className="fw-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold" active>
            TV Shows
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="fw-bold">
            My List
          </Nav.Link>
        </Nav>
        <i className="fa fa-search icons"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons"></i>
        <i className="fa fa-user icons"></i>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
