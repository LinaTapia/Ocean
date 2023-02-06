import React, { useEffect, useState } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/itemCount'
import Item from '../ItemListContainer/Item';
import ItemDetail from './ItemDetail';

const ProductList = [
    {
        id:1,
        nombre: "Tapón Humo Negro - Rojo",
        precio: "1.500 - 7.500",
        imagen: "p1.jpg",
        categoria: "resin plugs",
        stock: 5
    },
    {
        id:2,
        nombre: "Tapón Humo Azul",
        precio: "1.500 - 7.500",
        imagen: "p2.jpg",
        categoria: "resin-plugs",
        stock: 2
    },
    {
        id:3,
        nombre: "Tapón Turquesa Traslúcido",
        precio: "1.500 - 7.500",
        imagen: "p3.jpg",
        categoria: "resin-plugs",
        stock: 8
    },
    {
        id:4,
        nombre: "Tapón Negro Traslúcido",
        precio: "1.500 - 7.500",
        imagen: "p4.jpg",
        categoria: "wood-plugs",
        stock: 3
    },
    {
        id:5,
        nombre: "Tapón Rosado",
        precio: "1.500 - 8.500",
        imagen: "p5.jpg",
        categoria: "wood-plugs",
        stock: 1
    },
    {
        id:6,
        nombre: "Tapón Océano",
        precio: "1.500 - 8.500",
        imagen: "p6.jpg",
        categoria: "spiral-plugs",
        stock: 6
    },
];

const ItemDetailContainer = () => {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const ruta = useParams();

useEffect( () => {
    if(ruta.id){
        getProducts().then( response => {
            setProducts(response.filter(producto => producto.id == ruta.id));
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }else{
        getProducts().then( response => {
            setProducts(response);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }
}, [ruta.id]);

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(ProductList);
        }, 2000);
    })
}

  return (
    <section>
        <Container>
            {loading ?      
             <Row className='mt-5'> 
                <Spinner animation="border" role="status" className="mx-auto">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </Row>
            :
            products.map( p => <ItemDetail key={p.id} {...p} /> )}
        </Container>
    </section>
  )
}

export default ItemDetailContainer