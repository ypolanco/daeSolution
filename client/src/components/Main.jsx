import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import {
  getAllPortfolios,
  createPortfolio,
  deletePortfolio,
  updatePortfolio,
} from "../services/portfolio";
import ShowPortfolios from "./ShowPortfolio";
import Register from "./Register";
import {
  getAllSecurities,
  deleteSecurities,
  createSecurities,
} from "../services/securities";
import ShowSecurities from "./ShowSecurities";
import CreateSecurity from "./CreateSecurity";
import CreatePortfolio from "./CreatePortfolio";
import UpdatePortfolio from "./UpdatePortfolio";
import Nav from "./Nav";

export default class Main extends Component {
  state = {
    portfolios: [],
    securities: [],
  };

  componentDidMount() {
    this.getPortfolio();
    // this.getSecurities();
  }

// ===============================
  // ========== Portfolios =========
  // ===============================

  getPortfolio = async () => {
    const portfolios = await getAllPortfolios();
    this.setState({ portfolios });
  };

  newPortfolio = async (portData) => {
    const newPortfolio = await createPortfolio(portData);

    this.setState((prevState) => ({
      portfolios: [...prevState.portfolios, newPortfolio],
    }));
  };

  destroyPortfolio = async (id) => {
    await deletePortfolio(id);
    this.setState((prevState) => ({
      portfolios: prevState.portfolios.filter((port) => port.id !== id),
    }));
  };

  putPortfolio = async (id, portData) => {
    const updatePort = await updatePortfolio(id, portData);

    this.setState((prevState) => ({
      portfolios: prevState.portfolios.map((port) =>
        port.id === id ? updatePort : port
      ),
    }));
  };

 // ===============================
  // ========== Securities =========
  // ===============================

  getSecurities = async (id) => {
    const securities = await getAllSecurities(id);
    this.setState({ securities });
  };

  postSecurity = async (securityData) => {
    const newFood = await createSecurities(securityData);
    this.setState((prevState) => ({
      securities: [...prevState.securities, newFood],
    }));
  };

  destroySecurity = async (id) => {
    await deleteSecurities(id);
    this.setState((prevState) => ({
      securities: prevState.securities.filter((security) => security.id !== id),
    }));
  };

  newSecurity = async (securityData) => {
    const newSecurity = await createSecurities(securityData);

    this.setState((prevState) => ({
      securities: [...prevState.securities, newSecurity],
    }));
  };

  render() {
    return (
      <>
        <main>
          <Route
            exact
            path="/"
            render={(props) => (
              <Login
                {...props}
                handleLoginSubmit={this.props.handleLoginSubmit}
              />
            )}
          />
          <Route
            path="/user/register"
            render={(props) => (
              <Register
                {...props}
                handleRegisterSubmit={this.props.handleRegisterSubmit}
              />
            )}
          />
          <Route
            path="/portfolios/"
            render={() => (
              <ShowPortfolios
                portfolios={this.state.portfolios}
                destroyPortfolio={this.destroyPortfolio}
                currentUser={this.props.currentUser}
              />
            )}
          />
          <Route
            path="/portfolios/:id/edit"
            render={(props) => {
              const portId = props.match.params.id;
              const portfolio = this.state.portfolios.find(
                (port) => port.id === parseInt(portId)
              );
              return (
                <UpdatePortfolio
                  {...props}
                  portfolios={portfolio}
                  putPortfolio={this.putPortfolio}
                />
              );
            }}
          />
          <Route
            path="/portfolios/:id/securities"
            render={(match) => (
              <ShowSecurities
                match={match}
                securities={this.state.securities}
                currentUser={this.props.currentUser}
                destroySecurity={this.destroySecurity}
                getSecurities={this.getSecurities}
                portfolios={this.state.portfolios}
                createSecurity={this.newSecurity}
              />
            )}
          />
          <Route
            path="/new/portfolio"
            render={(props) => (
              <CreatePortfolio {...props} postPortfolio={this.newPortfolio} />
            )}
          />{" "}
          <Route
            path="/new/security"
            render={(props) => (
              <CreateSecurity {...props} postSecurity={this.postSecurity} />
            )}
          />{" "}
        </main>
      </>
    );
  }
}
