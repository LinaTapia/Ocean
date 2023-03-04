import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './public/css/style.css';
import { memo } from 'react';

const Item = memo(
  ({id, nombre, precio, imagen}) => {
    return (
      <Col xs={12} md={6} lg={3} className="my-3 text-center">
          <Card id={"product"+id}>
              <Card.Img variant="top" src={"/"+imagen} className="img" />
              <Card.Body>
                  <Card.Title>{nombre}</Card.Title>
                  <Card.Text>
                      ${precio.toLocaleString("de")}
                  </Card.Text>
                  <Link to={`/item/${id}`}>
                    <Button variant="primary">Comprar</Button>
                  </Link>
              </Card.Body>
          </Card>
      </Col>
    )
  }
)

export default Item;