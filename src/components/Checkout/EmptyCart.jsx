import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const EmptyCart = () => {
  return (
    <Row> 
        <Col xs={12} md={21} className="my-3 text-center"> 
            <h1><i className="bi bi-cart2"></i></h1>
            <h2 className="my-3"> Tu carrito está vacío! :( </h2>
            <Link to='/'>
            <Button variant="primary">Volver al Inicio</Button>
            </Link>
        </Col>
    </Row>
  )
}

export default EmptyCart