import React, { Component } from "react";

export default class CreateSecurity extends Component {
  state = {
    ticker: "",
    price: 0,
    ftWH: 0,
    ftWL: 0,
    purchase_price: 0,
    position_size: 0,
  };

  // handle change found across the board

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    const {
      ticker,
      price,
      ftWH,
      ftWL,
      purchase_price,
      position_size,
    } = this.state;
    const { postSecurity, history } = this.props;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postSecurity(this.state);
          history.push("/securities");
          this.setState({
            ticker: "",
            price: 0,
            ftWH: 0,
            ftWL: 0,
            purchase_price: 0,
            position_size: 0,
          });
        }}
      >
        <hr />
        <h3>Create Security</h3>
        <label htmlFor="ticker">Ticker:</label>
        <input
          id="ticker"
          type="text"
          name="ticker"
          value={ticker}
          onChange={this.handleChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <label htmlFor="ftWH">52 Week High:</label>
        <input
          id="ftWH"
          type="number"
          name="ftWH"
          value={ftWH}
          onChange={this.handleChange}
        />
        <label htmlFor="ftWL">52 Week Low:</label>
        <input
          id="ftWL"
          type="number"
          name="ftWL"
          value={ftWL}
          onChange={this.handleChange}
        />
        <label htmlFor="purchase_price">Purchase Price:</label>
        <input
          id="purchase_price"
          type="number"
          name="purchase_price"
          value={purchase_price}
          onChange={this.handleChange}
        />
        <label htmlFor="position_size">Purchase size:</label>
        <input
          id="position_size"
          type="number"
          name="position_size"
          value={position_size}
          onChange={this.handleChange}
        />
        <button>Create</button>
      </form>
    );
  }
}
