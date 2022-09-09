import Image from "next/image";
import React from "react";

export default function Extras() {
  return (
    <section className="section">
      <div className="container">
        <div className="extras-wrapper">
          <div className="extras__title__container">
            <h2 className="extras__title">Endless Extras</h2>
            <p className="extras__title__body">
              Joining Starbucks® Rewards means unlocking access to exclusive
              benefits. Say hello to easy ordering, tasty Rewards and—yes, free
              coffee.
            </p>
          </div>
          <div className="extras__items">
            <div className="extras__item__container">
              <div className="extras__item__img__container">
                <Image
                  src="/fun-freebies.jpg"
                  alt=""
                  role="presentation"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="extras__item__details__container">
                <h3 className="extras__item__details__title">Fun freebies</h3>
                <p className="extras__item__details__body">
                  Not only can you earn free coffee, look forward to a birthday
                  treat plus coffee and tea refills.
                </p>
                <a
                  className="extras__item__details__link"
                  href="https://www.starbucks.com/rewards"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="extras__item__container">
              <div className="extras__item__img__container">
                <Image
                  src="/order-and-pay-ahead.jpg"
                  alt=""
                  role="presentation"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="extras__item__details__container">
                <h3 className="extras__item__details__title">
                  Order {"&"} pay ahead
                </h3>
                <p className="extras__item__details__body">
                  Enjoy the convenience of in-store, curbside or drive-thru
                  pickup at select stores.
                </p>
                <a
                  className="extras__item__details__link"
                  href="https://www.starbucks.com/rewards"
                >
                  Learn more
                </a>
              </div>
            </div>

            <div className="extras__item__container">
              <div className="extras__item__img__container">
                <Image
                  src="/get-to-free-faster.jpg"
                  alt=""
                  role="presentation"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="extras__item__details__container">
                <h3 className="extras__item__details__title">
                  Get to free faster
                </h3>
                <p className="extras__item__details__body">
                  Earn Stars even quicker with Bonus Star challenges, Double
                  Star Days and exciting games.
                </p>
                <a
                  className="extras__item__details__link"
                  href="https://www.starbucks.com/rewards"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
