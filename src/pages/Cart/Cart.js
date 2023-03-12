import Button from 'react-bootstrap/Button';

function Cart() {
  return (
    <>
      <Button variant="outline-primary">Comprar</Button>{' '}
      <Button variant="outline-secondary">Eliminar Productos</Button>{' '}
      <Button variant="outline-success">Total</Button>{' '}
    </>
  );
}

export default Cart;
