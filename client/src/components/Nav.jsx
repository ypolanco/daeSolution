import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./images/SantosLogo.png";
import "./Nav.css";

export default function Header(props) {
  return (
    <div className="nav-container">
      <NavLink to="/portfolios">
        <div className="logo-container">
          <img src={logo} alt="" className="nav-logo" />
          <h1 className="app-name">Santos</h1>
        </div>
      </NavLink>
      {props.currentUser ? (
        <>
          <h4 className="username">Welcome {props.currentUser.username}</h4>
          <Link to="/">
            <button onClick={props.handleLogout} className="nav-logout">
              Logout
            </button>
          </Link>
        </>
      ) : (
        <Link to="/"></Link>
      )}
    </div>
  );
}
