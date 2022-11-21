import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainer = (props) => {
    return (
    <Container>
        <Row className="mt-5">
            <Col xs={12} md={6} lg={3}>
            {props.greeting}
                <Card>
                    <Card.Img variant="top" src="http://fpoimg.com/180x150?text=Rectangle" />
                    <Card.Body>
                        <Card.Title>{props.nombre}</Card.Title>
                        <Card.Text>
                            {props.precio}
                        </Card.Text>
                        <Button variant="primary">Seleccionar Opciones</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
} 

export default ItemListContainer;