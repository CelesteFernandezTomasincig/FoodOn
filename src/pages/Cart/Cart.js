import React, { useState } from 'react';
import { useCartContext } from '../../context/CardContext';
import { Link } from 'react-router-dom';
import ItemCart from '../../Components/ItemCart/ItemCart';

const Cart =()=> {
  const { cart } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);

  // Recorre el carrito y suma el precio de cada producto
  const calculateTotalPrice = () => {
    let sum = 0;
    cart.forEach((product) => {
      sum += product.price * product.cantidad;
    });
    setTotalPrice(sum);
  };

  // Calcula la suma total cada vez que cambia el carrito
  React.useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
          <div>
            <p>Total: ${totalPrice}</p>
            <button>Finalizar compra</button>
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


