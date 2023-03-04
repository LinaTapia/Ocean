import { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ItemCount = ({initial=1, stock, onAdd}) => {
  const [count, setCount] = useState(initial);
  const [buttons, setButtons] = useState(false)

  const plusItem = () => {
    if(count < stock){
      setCount(count + 1);
    }
  };

  const removeItem = () => {
    if(count > initial){
      setCount(count - 1);
    }
  };

  const addItem = () => {
    onAdd(count)
    setButtons(true)
  }

  return (
        <>
            <h5 className="mb-4">Stock: {stock - count == 0 ? 'No queda más stock' : stock - count}</h5>
            <div className='d-flex align-items-center justify-content-start mb-3'>
                <Button variant="dark" onClick={removeItem}>-</Button>
                <p className='mx-3 mb-0'>{count}</p>
                <Button variant="dark" onClick={plusItem}>+</Button>
            </div>
            { buttons ?
                <>
                <Link to="/cart/">
                  <Button variant="success" className="me-2">Ir al carrito</Button>
                </Link>
                <Link to="/">
                  <Button variant="outline-dark">Seguir comprando</Button>
                </Link>
              </>
            :
            <Button variant="dark" onClick={addItem}>Agregar al Carrito</Button>
            }
        </>
  )
}

export default ItemCount;