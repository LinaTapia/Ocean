import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main>
        <ItemListContainer greeting="Bienvenido a Ocean Plugs" nombre="Tapón con Humo" precio="1.500 - 7.500"/> 
      </main>
    </div>
  );
}

export default App;
