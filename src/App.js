import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
        
//PAGES
import Home from "./pages/Home/Home";
import MasVendidos from "./pages/masVendidos/MasVendidos";
import Contact from "./pages/contacto/Contact";
import ComidaDetail from './pages/ComidaDetail/ComidaDetail';

import NavBar from "./Components/NavBar";




function App() {
  return (
    <Router>
      <NavBar></NavBar>
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