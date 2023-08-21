import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpem = () => setIsCartOpen(!isCartOpen);

  return (
    <div
      className='cart-icon-container'
      onClick={toggleIsCartOpem}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
