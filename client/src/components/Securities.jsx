import React, { Component } from 'react'
import { getOneSecurity, portToSecurity } from '../services/foods';

export default class Securities extends Component {
  state = {
    portfolio: null,
    securities: ''
  }

  componentDidMount() {
    this.setPort()
  }

  // ===============================
  // ========== Sets Portfolios =========
  // ===============================

  setPort = async () => {
    const port = await getOneSecurity(this.props.securityId);
    this.setState({ port })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      securities: value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const port = await portToSecurity(this.state.portfolioId, this.state.securities.id);
    this.setState({ port });
  }

  render() {
    const { food } = this.state;
    const { flavors, currentUser } = this.props;
    return (
      <div>
        {
          food && (
            <>
              <h3>{food.name}</h3>
              {food.flavors.map(flavor => (
                <p key={flavor.id}>{flavor.name}</p>
              ))}
            
              {
                currentUser && currentUser.id === food.user_id && (
                  <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                      <option>--Select a flavor--</option>
                      {flavors.map(flavor => (
                        <option value={flavor.id} key={flavor.id}>{flavor.name}</option>
                      ))}
                    </select>
                    <button>Add a Flavor</button>
                  </form>
                )
              }
            </>
          )
        }
      </div>
    )
  }
}