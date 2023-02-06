import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


const ItemListContainer = () => {
    return (
    <section>
        <Container>
            <ItemList/>
        </Container>
    </section>
    );
} 

export default ItemListContainer;