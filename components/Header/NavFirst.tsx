import React from "react";
import { Startbucks } from "../Icon";

type Props = {
  toggleFirstDrawer: () => void;
  toggleDrawerTransition: () => void;
  firstDrawerOpen: boolean;
  toggleSecondDrawerTransition: () => void;
  toggleSecondDrawer: () => void;
  secondDrawerOpen: boolean;
};
export default function NavFirst({
  toggleFirstDrawer,
  toggleDrawerTransition,
  firstDrawerOpen,
  toggleSecondDrawerTransition,
  toggleSecondDrawer,
  secondDrawerOpen,
}: Props) {
  return (
    <div className="nav__first">
      <a className="nav__first__icon" href="">
        <Startbucks />
      </a>
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={firstDrawerOpen}
        aria-controls="mobile-nav-primary"
        aria-haspopup="menu"
        onClick={() => {
          if (firstDrawerOpen && secondDrawerOpen) {
            toggleFirstDrawer();
            toggleDrawerTransition();
            toggleSecondDrawerTransition();
            toggleSecondDrawer();
          } else if (!firstDrawerOpen) {
            toggleFirstDrawer();
            toggleDrawerTransition();
          } else if (firstDrawerOpen && !secondDrawerOpen) {
            toggleFirstDrawer();
            toggleDrawerTransition();
          }
        }}
      >
        <span className="hamburger"></span>
        <span className="visuallyhidden">Menu</span>
      </button>
    </div>
  );
}
