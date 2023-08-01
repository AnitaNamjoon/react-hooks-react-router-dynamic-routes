import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
      }}
    >
      
      <NavLink
        exact
        style={{ marginRight: "10px" }}
        activeStyle={{ fontWeight: "bold" }}
        to="/"
      >
        Home
      </NavLink>

    
      <NavLink
        exact
        style={{ marginRight: "10px" }}
        activeStyle={{ fontWeight: "bold" }}
        to="/movies"
      >
        Movies
      </NavLink>
    </div>
  );
}

export default NavBar;
