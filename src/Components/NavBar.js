/*import {navbar, navbarDropdown} from "react-bootstrap";*/
import { Link } from 'react-router-dom';
import CartWIdget from './CartWIdget';


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <CartWIdget/>
                <a class="navbar-brand" href="/">FoodOn</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href = "/" >Home</a><Link to="/"></Link></li>
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href = "/masVendido">Mas vendido</a><Link to="/masVendido"></Link></li>
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href = "/contact" >Registrate</a><Link to="/contact"></Link></li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;