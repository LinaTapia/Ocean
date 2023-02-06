import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import ItemCount from '../ItemCount/itemCount';

const ItemDetail = ({id, nombre, precio, imagen, stock}) => {
  return (
    <Row className='justify-content-evenly align-items-center'>
        <Col xs={12} md={6} lg={6} className="my-3 text-center">
            <img variant="top" src={"/src/components/ItemListContainer/public/img/"+imagen} className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="my-3 text-start">
            <p>{nombre}</p>
            <p>{precio}</p>
            <ItemCount/>
        </Col>
    </Row>
  )
}

export default ItemDetail;