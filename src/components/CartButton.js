import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      className: "noerror"
    };
  }

  increment = () => {
    this.setState(state => ({
      count: state.count + 1,
      className: "noerror"
    }));
  }

  decrement = () => {
    if(this.state.count !== 0){
        this.setState(state => ({
            count: state.count - 1,
            className: "noerror"
    }));
    }
    else{
      this.setState(state => ({
          count: 0,
          className: "error"
  }));
  }
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span> {this.state.count} </span>
        <button onClick={this.increment}>+</button>
        <br></br>
        <br></br>
        <FaShoppingCart size={30} color="#333" />
        {this.state.count >= 0 && <span className="cart-count">{this.state.count}</span>}
        <br></br>
        <p className={this.state.className}>Counter value cannot be negative</p>
      </div>
    );
  }
}
export default CartButton