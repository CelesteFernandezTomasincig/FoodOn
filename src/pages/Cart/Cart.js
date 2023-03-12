import React from 'react';
import { useCartContext } from '../../context/CardContext';
import { Link } from 'react-router-dom';
import ItemCart from '../../Components/ItemCart/ItemCart';


const Cart =()=> {
  return (
    <>

      <p>No hay elementos en el carrito</p>
      <Link to="/">Hacer Compras</Link>
    </>
  );
}

export default Cart;
