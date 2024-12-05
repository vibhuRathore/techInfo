import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigationbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container className="d-flex flex-row-reverse">
          <Navbar.Brand href="#home">ToDos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#completed">Completed tasks</Nav.Link>
            <Nav.Link href="#remaining">Remaining Tasks</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );  
}

export default Navigationbar;
