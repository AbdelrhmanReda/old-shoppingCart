import React, { Component } from "react";
import Product from "./product";

class ShoppingCart extends Component {
  render() {
    return (
      <>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.props.onDelete}
            onClickhandler={this.props.onClickhandler}
            onClickminus={this.props.onClickminus}
          ></Product>
        ))}
      </>
    );
  }
}

export default ShoppingCart;
