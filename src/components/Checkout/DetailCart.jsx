import Button from 'react-bootstrap/Button';

const DetailCart = ({cartList, deleteProd}) => {
  return (
    cartList.map( producto => (
        <div key={producto.id}>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <img variant="top" src={"/"+producto.imagen} style={{ width: '100px', height:'100px' }}/>
                    <div className="ms-4">
                        <h4>{producto.nombre}</h4>
                        <p className="my-2"> Cantidad: {producto.cantidad}</p>
                        <h5 className="mb-0">${(producto.precio * producto.cantidad).toLocaleString("de")}</h5>
                    </div>
                </div>
                <Button onClick={() => deleteProd(producto.id)} variant="danger"><i className="bi bi-trash3"></i></Button>
            </div>
            <hr/>
        </div>
    ))
  )
}

export default DetailCart