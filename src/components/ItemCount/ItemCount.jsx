import React, { useState }  from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const plusItem = () => {
    setCount(count + 1);
  };

  const removeItem = () => {
    setCount(count - 1);
  };


  return (
        <>
            <div className='d-flex align-items-center justify-content-start mb-3'>
                <Button variant="dark" onClick={removeItem}>-</Button>
                <p className='mx-3 mb-0'>{count}</p>
                <Button variant="dark" onClick={plusItem}>+</Button>
            </div>
            <Button variant="dark" onClick="">Agregar al Carrito</Button>
        </>
  )
}

export default ItemCount;