import React from "react";

export default function Hero() {
  return (
    <section className="section">
      <div className="hero__mobile-container">
        <div className="hero__mobile__text-container">
          <h2 className="hero__mobile__header" tabIndex={-1}>
            FREE COFFEE <br /> IS A TAP AWAY
          </h2>
          <div>
            <p className="hero__mobile__excerpt">
              Join now to start earning Rewards.
            </p>
          </div>
          <div className="hero__mobile__links-container">
            <a
              className="hero__mobile__link button button--light-green"
              href="https://starbucks.app.link/VLa2I3inh9"
            >
              Join in the app
            </a>
            <div className="hero__mobile__link--last--link-container">
              <a className="hero__mobile__link " href="/account/create">
                Or join online
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__desktop-container"></div>
    </section>
  );
}
