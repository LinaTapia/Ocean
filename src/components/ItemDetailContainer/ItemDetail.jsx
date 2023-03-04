import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col'
import { Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/itemCount'

const ItemDetail = ( { producto } ) => {
  const { addCart } = useCartContext()

  const onAdd = (cant) =>{
    addCart( { ...producto, cantidad: cant } )
  }

  return (
    <Row className='justify-content-evenly align-items-center'>
        {
          Object.getOwnPropertyNames(producto).length > 1 ? 
            <>
              <Col xs={12} md={6} lg={6} className="my-3 text-center">
                  <img variant="top" src={"/"+producto.imagen} className="w-75 h-75" />
              </Col>
              <Col xs={12} md={6} className="my-3 text-start">
                  <h2>{producto.nombre}</h2>
                  <p>{producto.descripcion}</p>
                  <h4 className="mb-3">${producto.precio?.toLocaleString("de")}</h4>
                  <ItemCount onAdd={onAdd} initial={1} stock={producto.stock}/>
              </Col>
            </>
          :
          <Col xs={12} md={6} lg={6} className="my-3 text-center">
               <h1><i className="bi bi-clipboard-x"></i></h1>
               <h2>Este producto no existe :(</h2>
               <Link to='/'>
                 <Button variant="primary">Volver al Inicio</Button>
              </Link>
          </Col>
        }
    </Row>
  )
}

export default ItemDetail;