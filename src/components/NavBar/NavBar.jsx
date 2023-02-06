import { Link } from 'react-router-dom';
import './public/css/style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoOcean from './public/img/logo.svg';
import CartWidget from './CartWidget.jsx'
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Link to="./">
            <img
              src={logoOcean}
              width="170"
              height="70"
              alt="Ocean Plugs Logo"
            />
          </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav className="align-items-center">
                    <Link to="./"><Nav.Link href="#a">Inicio</Nav.Link></Link>
                    <NavDropdown title="Tienda" id="basic-nav-dropdown">
                      <Link to="/category/resin-plugs"><NavDropdown.Item href="#action/3.1">Resin plugs</NavDropdown.Item></Link>
                      <Link to="/category/spiral-plugs"><NavDropdown.Item href="#action/3.2">Spiral Plugs</NavDropdown.Item></Link>
                      <Link to="/category/wood-plugs"><NavDropdown.Item href="#action/3.3">Wood Plugs</NavDropdown.Item></Link>
                    </NavDropdown>
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