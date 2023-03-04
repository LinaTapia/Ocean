import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import ItemList from './ItemList'
import Loading from '../Loading/Loading'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const ruta = useParams();

    useEffect( () => {

        setLoading(true)
        const db = getFirestore()
        const queryCollections = collection(db, 'productos')

        const queryFilter = ruta.id ? query(queryCollections, where('categoria', '==', ruta.id)) : queryCollections

        getDocs(queryFilter)
        .then( resp => setProducts( resp.docs.map(product => ({ id: product.id, ...product.data() }) ) ))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
        
    }, [ruta.id]); 

    return (
    <section>
        <Container>
            {
                loading ?
                <Loading/>
                :
                <ItemList products={products}/>
            }

        </Container>
    </section>
    );
} 

export default ItemListContainer;