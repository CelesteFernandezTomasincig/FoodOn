import React from "react";
import { useCartContext } from "../../context/CardContext";
import './itemCart.css';                
import {ComidaCardDetail} from '../ComidaCardDetail/ComidaCardDetail'


const ItemCart = ({ dataComida }) =>{
const {removeProduct}=useCartContext();
    return (
        <div className="itemCart">
            <img src={dataComida.img}></img>
            <div>
                <p>Titulo: {dataComida.name}</p>
                <p>Precio: {dataComida.price}</p>
                <p>Subtotal: ${dataComida.cantidad * dataComida.price}</p>
                <button onClick={() => removeProduct(dataComida.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;
