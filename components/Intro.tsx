import Image from "next/image";
import React from "react";

export default function Intro() {
  return (
    <section className="section">
      <div className="container">
        <div className="intro__container">
          <div className="intro__header__container">
            <h2 className="intro__header">Getting started is easy</h2>
            <p className="intro__desc">
              Earn Stars and get rewarded in a few easy steps.
            </p>
          </div>
          <div className="intro__list__container">
            <div className="intro__list__number">
              <Image
                src="/getting-started-1@2x.jpg"
                alt=""
                layout="fixed"
                width={"48px"}
                height={"48px"}
              />
            </div>
            <div className="intro__list__desc__container">
              <h3 className="intro__list__desc__header">
                Download the Starbucks® app
              </h3>
              <p className="intro__list__desc__body">
                <a
                  className="intro__list__desc__body__link"
                  href="https://starbucks.app.link/VLa2I3inh9"
                >
                  Join in the app
                </a>{" "}
                to get access to the full range of Starbucks® Rewards benefits.
                You can also{" "}
                <a
                  className="intro__list__desc__body__link"
                  href="/account/create"
                >
                  join online
                </a>
                .
              </p>
            </div>
          </div>
          <div className="intro__list__container">
            <div className="intro__list__number">
              <Image
                src="/getting-started-2@2x.jpg"
                alt=""
                layout="fixed"
                width={"48px"}
                height={"48px"}
              />
            </div>
            <div className="intro__list__desc__container">
              <h3 className="intro__list__desc__header">
                Order and pay how you’d like
              </h3>
              <p className="intro__list__desc__body">
                Use cash, credit/debit card or save some time and pay right
                through the app. You’ll collect Stars all ways.
                <a
                  className="intro__list__desc__body__link"
                  href="/account/create"
                >
                  Learn jow
                </a>
              </p>
            </div>
          </div>
          <div className="intro__list__container">
            <div className="intro__list__number">
              <Image
                src="/getting-started-3@2x.jpg"
                alt=""
                layout="fixed"
                width={"48px"}
                height={"48px"}
              />
            </div>
            <div className="intro__list__desc__container">
              <h3 className="intro__list__desc__header">
                Earn Stars, get Rewards
              </h3>
              <p className="intro__list__desc__body">
                As you earn Stars, you can redeem them for Rewards—like free
                food, drinks, and more. Start redeeming with as little as 25
                Stars!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
