import React from "react";
import { useCartContext } from "../../context/CardContext";
import './itemCart.css';                
import {ComidaCardDetail} from '../ComidaCardDetail/ComidaCardDetail'


const ItemCart = ({ product }) =>{
const {removeProduct}=useCartContext();
    return (
        <div className="itemCart">
            <img src={product.img}></img>
            <div>
                <p>Titulo: {product.name}</p>
                <p>Precio: {product.price}</p>
                <p>Subtotal: ${product.cantidad * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;
