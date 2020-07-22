import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ShowSecurities.css";

export default function ShowSecurities(props) {
  const [id, setId] = useState(props.match.match.params.id);
  const [form, setForm] = useState({ ticker: "" });

  const {
    securities,
    currentUser,
    destroySecurities,
    getSecurities,
    portfolios,
    createSecurity,
  } = props;

  // ===============================
  // ========== Multiple use Effect multiple Calls=========
  // ===============================

  useEffect(() => {
    getSecurities(props.match.match.params.id);
  }, []);

  useEffect(() => {
    if (props.match.match.params.id != id) {
      getSecurities(props.match.match.params.id);
      setId(props.match.match.params.id);
    }
  }, [props.match.match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createSecurity(form);
    setForm("");
  };

  return (
    <div className="securities">
      <div className="securities-header">
        <h3>Securities</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            className="input-securities"
            type="text"
            value={form.ticker}
            placeholder="Ticker"
            onChange={(e) =>
              setForm({ ticker: e.target.value, portfolio_id: id })
            }
          />
          <button type="submit" className="securities-button">
            Add
          </button>
        </form>
      </div>

      {securities.map((security) => (
        <React.Fragment key={security.id}>
          <div className="securities-display">
            <h4 key={security.ticker}>Ticker: {security.ticker}</h4>
            <p key={security.price}>Current Price:{security.price}</p>
            <p key={security.ftWH}>52 Week High: {security.ftWH}</p>
            <p key={security.ftWL}>52 Week Low: {security.ftWH}</p>
            <p key={security.purchase_price}>
              Purchase Price: {security.purchase_price}
            </p>
            <p key={security.position_size}>
              Position Size: {security.position_size}
            </p>

            {currentUser && currentUser.id === security.portfolio_id && (
              <>
                <button>edit</button>
                <button onClick={() => destroySecurities(security.id)}>
                  delete
                </button>
              </>
            )}
          </div>
        </React.Fragment>
      ))}

      <br />
    </div>
  );
}
