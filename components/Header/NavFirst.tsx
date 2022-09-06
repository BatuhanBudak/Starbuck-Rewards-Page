import React from "react";
import { Startbucks } from "../Icon";

export default function NavFirst({ toggleDrawerOpen, drawerOpen }) {
  return (
    <div className="nav__first">
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={drawerOpen}
        aria-haspopup="dialog"
        onClick={toggleDrawerOpen}
      >
        <span className="hamburger"></span>
        <span className="visuallyhidden">Menu</span>
      </button>
      <a className="nav__first__icon" href="">
        <Startbucks />
      </a>
    </div>
  );
}
