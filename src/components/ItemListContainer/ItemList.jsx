import Item from './Item'
import Row from 'react-bootstrap/Row'
import { memo } from 'react'

const ItemList = memo( 
  ({products}) => {
    return (
      <Row className="mt-5">
          {products.map( p => <Item key={p.id} {...p} /> )}
      </Row>
    )
  }
)

export default ItemList;