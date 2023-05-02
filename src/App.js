import NavBar from './components/Navbar/NavBar';
import './App.css';
import ItemListContainer from './components/itemListContainer/itemListConatiner';

import ItemListsDetalles from './components/ItemListDetalles/ItemListDetalles';
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element ={<ItemListContainer  />}/>
        <Route path='/categoria/:categoriaId' element ={<ItemListContainer />}/>  
        <Route path='/Item/:ItemId' element ={<ItemListsDetalles />}  />  
        <Route path='*' element ={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
