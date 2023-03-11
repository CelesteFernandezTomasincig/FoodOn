import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
//PAGES
import Home from "./pages/Home/Home";
import MasVendidos from "./pages/masVendidos/MasVendidos";
import Contact from "./pages/contacto/Contact";
import ComidaDetail from './pages/ComidaDetail/ComidaDetail';
import NavBar from "./Components/NavBar";
import {ItemsContext } from './context/ItemContext';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <Router>
       <ItemsContext >
      <NavBar>
      </NavBar>
      </ItemsContext >
      <Routes>
       <Route  path="/" element={<Home/> } />
        <Route path="/masVendido" element={<MasVendidos/>} />
        <Route path="/masVendido/detail/:id" element={<ComidaDetail/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/detail/:id" element={<ComidaDetail/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>

    </Router>
  );
}

export default App;