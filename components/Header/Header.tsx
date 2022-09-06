import { useEffect } from "react";
import useToggle from "../../hooks/useToggle";
import NavDrawer from "./NavDrawer";
import NavFirst from "./NavFirst";
import NavMenu from "./NavMenu";

export default function Header() {
  const [drawerOpen, toggleDrawerOpen] = useToggle();

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [drawerOpen]);

  return (
    <header>
      <a href="#content" className="visuallyhidden skip-nav">
        Skip Navigation
      </a>
      <div className="container">
        <nav className={`nav ${drawerOpen ? "drawer-open" : ""}`}>
          <NavFirst
            toggleDrawerOpen={toggleDrawerOpen}
            drawerOpen={drawerOpen}
          />
          <NavMenu />
          <NavDrawer drawerOpen={drawerOpen} />
        </nav>
      </div>
    </header>
  );
}
