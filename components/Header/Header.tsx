import { useEffect } from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavFirst from "./NavFirst";
import NavMenu from "./NavMenu";
import useTransition from "../../hooks/useTransition";

export default function Header() {
  const [firstDrawerOpen, toggleFirstDrawer] = useToggle();
  const [drawerTransitioning, toggleDrawerTransition] = useTransition();
  const [secondDrawerOpen, toggleSecondDrawer] = useToggle();

  const [secondDrawerTransitioning, toggleSecondDrawerTransition] =
    useTransition();

  useEffect(() => {
    if (firstDrawerOpen || secondDrawerOpen) {
      document.body.classList.add("nav-open");
    } else if (!firstDrawerOpen && !secondDrawerOpen) {
      document.body.classList.remove("nav-open");
    }
  }, [firstDrawerOpen, secondDrawerOpen]);

  return (
    <header>
      <a href="#content" className="visuallyhidden skip-nav">
        Skip Navigation
      </a>
      <div className="container nav__container">
        <nav className={`nav ${firstDrawerOpen ? "drawer-open" : ""}`}>
          <NavFirst
            toggleFirstDrawer={toggleFirstDrawer}
            firstDrawerOpen={firstDrawerOpen}
            toggleDrawerTransition={toggleDrawerTransition}
            toggleSecondDrawerTransition={toggleSecondDrawerTransition}
            toggleSecondDrawer={toggleSecondDrawer}
            secondDrawerOpen={secondDrawerOpen}
          />
          <NavMenu />
          <NavDrawer
            firstDrawerOpen={firstDrawerOpen}
            drawerTransitioning={drawerTransitioning}
            secondDrawerOpen={secondDrawerOpen}
            toggleSecondDrawer={toggleSecondDrawer}
            secondDrawerTransitioning={secondDrawerTransitioning}
            toggleSecondDrawerTransition={toggleSecondDrawerTransition}
          />
        </nav>
      </div>
    </header>
  );
}
