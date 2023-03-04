import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Container} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loading from '../Loading/Loading'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const ruta = useParams()

    useEffect( () => {
        const db = getFirestore()
        const query = doc(db, 'productos', ruta.id)
        getDoc(query)
        .then( resp => setProduct( {id: resp.id, ...resp.data() } ))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [ruta.id]) 
 
  return (
    <section className="mt-5">
        <Container>
            {loading ?      
            <Loading/>
            :
            <ItemDetail producto={product} />
            }
        </Container>
    </section>
  )
}

export default ItemDetailContainer