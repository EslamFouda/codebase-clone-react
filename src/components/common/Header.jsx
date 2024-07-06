import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navList } from "../data/Data";

function Header() {
  return (
    <div className="nav">
      <div className="container">
        <div className="navlogo">
          <Link to="/">
            <img className="logo" src="../assets/codebase-logo.png" alt="" />
          </Link>
        </div>
        <span className="icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="navbar">
          {navList.map((list) => (
            <NavLink
              className={({ isActive }) => {
                return !isActive ? "list" : "active";
              }}
              key={list.id}
              to={list.path}
            >
              {list.text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
