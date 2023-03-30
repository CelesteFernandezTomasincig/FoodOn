import React from 'react';
import { useCartContext } from '../../context/CardContext';
import { Link } from 'react-router-dom';
import ItemCart from '../../Components/ItemCart/ItemCart';

const Cart =()=> {
  const { cart, getTotal } = useCartContext();

  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
          <div>
            <p>Total: ${getTotal()}</p>
            <Link to="../../contact">
            <button>Finalizar compra</button>
            </Link>
          </div>
          <Link to="/">Seguir comprando</Link>
        </div>
      ) : (
        <div>
          <p>No hay elementos en el carrito</p>
          <Link to="/">Hacer Compras</Link>
        </div>
      )}
    </>
  );
}

export default Cart;                    


