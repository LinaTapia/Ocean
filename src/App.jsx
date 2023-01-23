import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <main>
        <ItemListContainer greeting="Bienvenido a Ocean Plugs" nombre="Tapón con Humo" precio="1.500 - 7.500"/> 
      </main>
    </div>
  )
}

export default App
