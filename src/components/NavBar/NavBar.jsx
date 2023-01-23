import './public/css/style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoOcean from './public/img/logo.svg';
import CartWidget from './CartWidget.jsx'

const NavBar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={logoOcean}
              width="170"
              height="70"
              alt="Ocean Plugs Logo"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="align-items-center">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Tienda</Nav.Link>
                    <Nav.Link href="#">Nosotros</Nav.Link>
                    <Nav.Link href="#">Contacto</Nav.Link>
                    <Nav.Link href="#"><i className="bi bi-person-circle"></i></Nav.Link>
                    <CartWidget/>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar