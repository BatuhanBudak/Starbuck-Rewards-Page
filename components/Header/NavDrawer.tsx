import { MapMarker } from "../Icon";

type Props = {
  toggleSecondDrawerTransition: () => void;
  toggleSecondDrawer: () => void;
  firstDrawerOpen: boolean;
  secondDrawerOpen: boolean;
  drawerTransitioning: boolean;
  secondDrawerTransitioning: boolean;
};

export default function NavDrawer({
  firstDrawerOpen,
  secondDrawerOpen,
  drawerTransitioning,
  toggleSecondDrawer,
  secondDrawerTransitioning,
  toggleSecondDrawerTransition,
}: Props) {
  return (
    <div>
      <div
        className={`${drawerTransitioning ? "in-transition" : ""} nav__drawer`}
        aria-hidden={!firstDrawerOpen || secondDrawerOpen}
        tabIndex={firstDrawerOpen && !secondDrawerOpen ? 0 : -1}
        role="menu"
      >
        <ul className="nav__drawer__list" id="mobile-nav-primary">
          <li className="nav__drawer__list__item">
            <button
              className="nav__drawer__list__item__btn  has-arrow"
              aria-controls="mobile-nav-secondary"
              aria-haspopup="menu"
              aria-expanded={secondDrawerOpen}
              onClick={() => {
                toggleSecondDrawer();
                toggleSecondDrawerTransition();
              }}
            >
              Menu
            </button>
          </li>
          <li className="nav__drawer__list__item">
            <a className="nav__drawer__list__item__link" href="">
              Rewards
            </a>
          </li>
          <li className="nav__drawer__list__item">
            <a className="nav__drawer__list__item__link" href="">
              Gift Cards
            </a>
          </li>
        </ul>
        <hr className="nav__drawer__seperator" />
        <div className="nav__drawer__auth">
          <div className="nav__drawer__auth__button-container">
            <a className="nav__drawer__auth__link button" href="">
              Sign in
            </a>
            <a className="nav__drawer__auth__link button button--white" href="">
              Join now
            </a>
          </div>
          <a className="nav__drawer__auth__link" href="">
            <MapMarker />
            Find a store
          </a>
        </div>
      </div>
      <div
        className={`${
          secondDrawerTransitioning ? "in-transition" : ""
        } nav__drawer-second ${secondDrawerOpen ? "second-drawer-open" : ""}`}
        role="menu"
        aria-hidden={!secondDrawerOpen}
        tabIndex={secondDrawerOpen ? 0 : -1}
      >
        <button
          className="nav__drawer-second__list__item__btn  has-arrow has-arrow--left"
          aria-controls="mobile-nav-secondary"
          aria-expanded={secondDrawerOpen}
          aria-label="Close seconday navigation"
          onClick={() => {
            toggleSecondDrawer();
            toggleSecondDrawerTransition();
          }}
        >
          Menu
        </button>
        <ul
          className="nav__drawer__list nav__drawer__list--second"
          id="mobile-nav-secondary"
        >
          <li className="nav__drawer__list__item">
            <a className="nav__drawer__list__item__link" href="">
              All products
            </a>
          </li>
          <li className="nav__drawer__list__item">
            <a className="nav__drawer__list__item__link" href="">
              Featured
            </a>
          </li>
          <li className="nav__drawer__list__item">
            <a className="nav__drawer__list__item__link" href="">
              Previous
            </a>
          </li>
          <li className="nav__drawer__list__item">
            <a className="nav__drawer__list__item__link" href="">
              Favorites
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
