import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoOcean from './public/img/logo.svg';
import CartWidget from './CartWidget.jsx'
import './public/css/style.css';


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
                    <NavLink to="./" className="nav-link">Inicio</NavLink>
                    <NavDropdown title="Tienda" id="basic-nav-dropdown">
                      <Link to="/category/resin-plugs" className="dropdown-item">Resin plugs</Link>
                      <Link to="/category/spiral-plugs" className="dropdown-item">Spiral plugs</Link>
                      <Link to="/category/wood-plugs" className="dropdown-item">Wood plugs</Link>
                    </NavDropdown>
                    <CartWidget/>
                </Nav>
              </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar