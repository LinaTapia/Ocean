import { useCartContext } from "../../context/CartContext"
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormCart from './FormCart'
import DetailCart from "./DetailCart";
import EmptyCart from "./EmptyCart";
import { getCurrentDate } from "../../helpers/getCurrentDate";

const Checkout = () => {
  const initialStateData = {
    name: '',
    last_name: '',
    phone:'',
    email:'',
    emailRepeat: ''
  }


  const [formData, setFormData] = useState(initialStateData)
  const [isId, setId] = useState('')

  const { cartList, deleteCart, deleteProd, totalPrice }  = useCartContext()

  const addOrder = async (evt) => {
    evt.preventDefault()
    const order = {}

    order.buyer = formData
    order.items = cartList.map(prod => {
      const id = prod.id;
      const nombre = prod.nombre;
      const precio = prod.precio * prod.cantidad;
      return {id, nombre, precio}   
    })
    order.estado = "generada"
    order.fecha = getCurrentDate()
    order.total = totalPrice()
    
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')

    addDoc(ordersCollection, order)
    .then(resp=> setId(resp.id))
    .catch(error => console.log(error))
    .finally(() => {
      deleteCart()
      setFormData(initialStateData)
    })
  }

  const handleOnChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  return (

    <section> 
        <Container>
        { cartList.length === 0 && isId === '' ?
            <EmptyCart/>
        :
          <Row> 
              
            {isId != 0 ? 
              <>
                <h1 className="text-center mb-2 mt-5"><i className="bi bi-check-circle"></i></h1>
                <h3 className="text-center">Orden: <strong>{isId}</strong></h3>
                <p className="text-center">Tu compra ha sido ingresada existosamente!</p>
              </>
              :
              <>
                <Col xs={12} md={8} className="my-3"> 
                    {
                      <DetailCart cartList={cartList} deleteProd={deleteProd}/>
                    }
                  <h3>Precio Total: ${totalPrice().toLocaleString("de")}</h3>
                  <Button variant="outline-danger" className="mt-5 d-flex ms-auto" onClick={deleteCart}>Vaciar Carrito</Button>
                </Col>
                <Col xs={12} md={4} className="my-3"> 
                  <FormCart addOrder={addOrder} formData={formData} handleOnChange={handleOnChange} />
                </Col>
              </>
            }
          </Row>
        }
      </Container>
    </section>
  )
}

export default Checkout