import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return(
        <Row className='mt-5'>
            <Spinner animation="border" role="status" className="mx-auto">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
        </Row>
    )
}

export default Loading