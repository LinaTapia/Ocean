import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
        <NavBar/> 
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:id' element={<ItemListContainer/> } />
          <Route path='/item/:id' element={<ItemDetailContainer/> } />
          <Route path='/cart/' element={<Checkout/> } />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
