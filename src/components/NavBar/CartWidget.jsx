import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { totalProds } = useCartContext();
    return (
        <NavLink to="/cart" className="d-flex align-items-center nav-link">  
            <i className="bi bi-cart2"></i>
            <span className="nav-item__badge ms-2">{totalProds()}</span>
        </NavLink>
    );
}

export default CartWidget;