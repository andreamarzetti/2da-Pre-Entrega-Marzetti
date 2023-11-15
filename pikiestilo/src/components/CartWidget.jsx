import cart from "../assets/compras.png"

export const CartWidget = () => {

  return (
    <>
      <img src={cart} alt="Carrito" width="40" /> <span>0</span>
    </>
  );
};