import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/SantosLogo.png";
import "./Register.css";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    const { handleRegisterSubmit, history } = this.props;
    return (
      <>
        <div className="register">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Santos Logo" className="logo" />
            </Link>
          </div>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleRegisterSubmit(this.state);
              history.push("/");
              this.setState({
                username: "",
                email: "",
                password: "",
              });
            }}
          >
            <h3 className="header">Register</h3>
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              className="register-input"
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />

            <br />
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              className="register-input"
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password" className="label-register">
              Password
            </label>
            <input
              className="register-input"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <br />
            <button className="button">Create Account</button>
          </form>
        </div>
      </>
    );
  }
}
