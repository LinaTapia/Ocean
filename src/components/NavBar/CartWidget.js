import Nav from 'react-bootstrap/Nav';

const CartWidget = () => {
    return (
        <Nav.Link href="#">  
            <i className="bi bi-cart2"></i>
            <span className="nav-item__badge ms-2">0</span>
        </Nav.Link>
    );
}

export default CartWidget;