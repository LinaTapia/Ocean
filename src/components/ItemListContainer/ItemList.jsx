import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';


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
        categoria: "resin-plugs",
        stock: 3
    },
    {
        id:5,
        nombre: "Tapón Madera Rosado",
        precio: "1.500 - 8.500",
        imagen: "p5.jpg",
        categoria: "wood-plugs",
        stock: 1
    },
    {
        id:6,
        nombre: "Espiral Océano",
        precio: "1.500 - 8.500",
        imagen: "p6.jpg",
        categoria: "spiral-plugs",
        stock: 6
    },
];

const ItemList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const ruta = useParams();
    useEffect( () => {
        if(ruta.id){
            getProducts().then( response => {
                setProducts(response.filter(producto => producto.categoria == ruta.id));
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
    <Row className="mt-5">
        {loading ?       
            <Spinner animation="border" role="status" className="mx-auto">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
            :
            products.map( p => <Item key={p.id} {...p} /> )}
        
    </Row>
  )
}

export default ItemList;