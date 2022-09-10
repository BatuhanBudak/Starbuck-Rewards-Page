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
      <div className="hero__desktop">
        <div className="hero__desktop__bground">
          <div className="content-container-xl no-padding m-auto">
            <div className="flex">
              <div className="hero__desktop__embed__height"></div>
              <div className="hero__desktop__text-container">
                <h2 className="hero__desktop__header" tabIndex={-1}>
                  FREE COFFEE <br /> IS A TAP AWAY
                </h2>
                <div>
                  <p className="hero__desktop__excerpt">
                    Join now to start earning Rewards.
                  </p>
                </div>
                <div className="hero__desktop__links-container">
                  <a
                    className="hero__desktop__link button button--light-green"
                    href="https://starbucks.app.link/VLa2I3inh9"
                  >
                    Join now
                  </a>
                  <div className="hero__desktop__link--last--link-container">
                    Or
                    <a className="hero__desktop__link " href="/account/create">
                      {" "}
                      join in the app{" "}
                    </a>
                    for the best experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
