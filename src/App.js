import NavBar from './components/Navbar/NavBar';
import './App.css';
import ItemListContainer from './components/itemListContainer/itemListConatiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Mi Primera App con React JS"} />
    </div>
  );
}

export default App;
