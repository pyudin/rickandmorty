import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Nav() {
  const styleLinks = {
    color: "white",
    textDecoration: "none",
    // margin: "0 15px 0 0",
  };
  return (
    <nav>
      <h1>Logo</h1>

      <ul className="nav-links">
        <Link to="/" style={styleLinks}>
          <li>Main page</li>
        </Link>
        <Link to="/characters" style={styleLinks}>
          <li>Characters</li>
        </Link>
        <Link to="/episodes" style={styleLinks}>
          <li>Episodes</li>
        </Link>
        <Link to="/locations" style={styleLinks}>
          <li>Locations</li>
        </Link>
        <Link to="/about" style={styleLinks}>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
