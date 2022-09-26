import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#Home">Football</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">home</Nav.Link>
            <Nav.Link href="/Clubs">Clubs</Nav.Link>
            <NavDropdown title="Players" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Lionel_Messi">Messi</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Cristiano_Ronaldo">Ronaldo</NavDropdown.Item>
              <NavDropdown.Item href="https://en.wikipedia.org/wiki/Neymar">Neymar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjfnNja26X6AhV6D7cAHQhlBo8QPAgI">
                Know about other players
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;