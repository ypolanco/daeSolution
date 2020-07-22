import React, { Component } from "react";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import "./App.css"

export default class App extends Component {
  state = {
    currentUser: null,
  };

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleRegisterSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };

  handleLogout = () => {
    this.setState({
      currentUser: null,
    });
    localStorage.clear();
    removeToken();
  };

  componentDidMount = async () => {
    await this.handleVerify();
  };

  render() {
    return (
      <div>
        <Route path="/portfolios/">
        <Nav
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
          />
          </Route>
        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handleRegisterSubmit={this.handleRegisterSubmit}
          handleVerify={this.handleVerify}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }
}
