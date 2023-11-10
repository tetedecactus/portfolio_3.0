import React from "react";
import Navbar from "./navbar.js";

export default function Layout({ children }) {
  return (
  <div>
    <div className="navbar" id="menu">
        <Navbar />
      </div>
    {children}
  </div>
  );
}