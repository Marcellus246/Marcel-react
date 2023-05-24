import { Container, Nav, Navbar } from 'react-bootstrap';

const Navbar1 = () => {
  return (
    <div className="animate__animated animate__fadeInDown animate__delay-1s">
    <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">Marcel House</Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      </div>
  )
}

export default Navbar1