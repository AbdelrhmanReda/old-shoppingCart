import React from "react";

const Cart = props => {
    // console.log(props.products.inCart)

  const style = !props.product.inCart
    ? { color: "#80808080", cursor: "pointer" }
    : { cursor: "pointer" };


  return (
    <i
      style={style}
      onClick={()=> props.onClick(props.product)}
      className="fas fa-cart-plus"
    ></i>
  );
};

export default Cart;