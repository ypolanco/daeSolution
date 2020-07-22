import React from "react";
import { Link } from "react-router-dom";
import "./ShowPortfolio.css";

export default function ShowPortfolios(props) {
  const { portfolios, destroyPortfolio } = props;

  return (
<>
    {props.currentUser ? (
      <>
      <hr />
      <div className="main-container">
        <div className="title">
          <h3 className="section">Portfolios</h3>

          <Link to="/new/portfolio">
            <p className="add-button"><span className="plus">+</span> Portfolio</p>
          </Link>
        </div>
        <div className="portfolios">
        {portfolios.map((port) => (
          <div className="port">
            <Link to={`/portfolios/${port.id}/securities`} key={port.name}>
              <p key={port.id} className="port-name">{port.name}</p>
            </Link>
            <Link to={`/portfolios/${port.id}/edit`} className="port-name">
              <p>Edit</p>
            </Link>
            <button onClick={() => destroyPortfolio(port.id)} className="delete">
              Delete
            </button>
          </div>
        ))}
          </div>
      </div>
    </>
    ) : (
          <Link to="/" className="return-sign-in">Return to Sign In</Link>
        )}
  </>
  );
}
