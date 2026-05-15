import React from "react";

function NavBar() {
  return (
    <nav style={{ padding: "1rem", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
      <a href="#home" style={{ marginRight: "1rem", textDecoration: "none", color: "#334155" }}>Home</a>
      <a href="#about" style={{ textDecoration: "none", color: "#334155" }}>About</a>
      <a href="#about" style={{ textDecoration: "none", color: "#334155" }}>Services</a>
    </nav>
  );
}

export default NavBar;