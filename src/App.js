import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
//PAGES
import Home from "./pages/Home/Home";
import MasVendidos from "./pages/masVendidos/MasVendidos";
import Contact from "./pages/contacto/Contact";
import ComidaDetail from './pages/ComidaDetail/ComidaDetail';

import NavBar from "./Components/NavBar";

//importo mi contexto provider
import { ItemsProvider } from './context/ItemsContext';


function App() {
  return (
    <Router>
      <ItemsProvider>
      <NavBar></NavBar>
      </ItemsProvider>
      <Routes>
       <Route  path="/" element={<Home/> } />
        <Route path="/masVendido" element={<MasVendidos/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/detail/:id" element={<ComidaDetail/>} />s
      </Routes>
    </Router>
  );
}

export default App;