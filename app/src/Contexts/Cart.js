import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: !localStorage.getItem("cartItems")
        ? []
        : [...JSON.parse(localStorage.getItem("cartItems"))],
    };
  }

  addToCart(product) {
    console.log("adding cart");
    let updatedCartItems = [...this.state.cartItems, product]
    console.log(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    this.setState({
      cartItems: updatedCartItems,
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart.bind(this),
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
