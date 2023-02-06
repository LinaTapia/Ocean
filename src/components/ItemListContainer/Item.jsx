import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './public/css/style.css';
const Item = ({id, nombre, precio, imagen, stock}) => {
  return (
    <Col xs={12} md={6} lg={3} className="my-3 text-center">
        <Card id={"product"+id}>
            <Card.Img variant="top" src={"/src/components/ItemListContainer/public/img/"+imagen} className="img" />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {precio}
                </Card.Text>
                <Link to={`/item/${id}`}>
                  <Button variant="primary">Seleccionar Opciones</Button>
                </Link>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default Item;