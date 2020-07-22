import React, { Component } from "react";
import "./CreatePortfolio.css";
import logo from "./images/SantosLogo.png";
import { Link } from "react-router-dom";

export default class CreatePortfolio extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  };

  // ===============================
  // ========== Create Port =========
  // ===============================

  render() {
    const { name } = this.state;
    const { postPortfolio, history } = this.props;
    return (
      <div className="create-form">
        <Link to="/portfolios">
          <img src={logo} alt="Santos Logo" className="logo" />
        </Link>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            postPortfolio(this.state);
            history.push("/portfolios");
            this.setState({
              name: "",
            });
          }}
        >
          <h3 className="header">Create Portfolio</h3>
          <label htmlFor="name" className="create-label">
            Name
          </label>
          <input
            id="id"
            type="text"
            value={name}
            onChange={this.handleChange}
            className="input-create-port"
          />
          <button className="create-port-button">Create</button>
        </form>
      </div>
    );
  }
}
