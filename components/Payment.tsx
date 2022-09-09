import React from "react";
import Image from "next/image";

export default function Payment() {
  return (
    <section className="section">
      <div className="container grey-background">
        <div className="payment-wrapper">
          <div className="payment__title__container">
            <h2 className="payment__title">Cash or card, you earn Stars</h2>
            <p className="payment__title__body">
              No matter how you pay, you can earn Stars with your morning
              coffee. Those Stars add up to (really delicious) Rewards.
            </p>
          </div>

          <div className="payment__items">
            <div className="payment__cost__container">
              <p className="payment__cost">
                1
                <span aria-hidden={true} className="star">
                  ★
                </span>
                <span className="visuallyhidden">Star</span>
                &nbsp;
                <span>per dollar</span>
              </p>
              <p>Pay as you go</p>
            </div>
            <div className="payment__item__container">
              <div className="payment__item__img__container">
                <Image
                  src="/1A.png"
                  alt=""
                  role="presentation"
                  layout="fixed"
                  width={112}
                  height={158}
                />
              </div>
              <div className="payment__item__details__container">
                <h3 className="payment__item__details__title">
                  Scan and pay separately
                </h3>
                <p className="payment__item__details__body">
                  Use cash or credit/debit card at the register.
                </p>
              </div>
            </div>

            <div className="payment__item__container">
              <div className="payment__item__img__container">
                <Image
                  src="/1B.png"
                  alt=""
                  role="presentation"
                  layout="fixed"
                  width={112}
                  height={158}
                />
              </div>
              <div className="payment__item__details__container">
                <h3 className="payment__item__details__title">
                  Save payment in the app
                </h3>
                <p className="payment__item__details__body">
                  Check-out faster by saving a credit/debit card or PayPal to
                  your account. You’ll be able to order ahead or scan and pay at
                  the register in one step.
                </p>
              </div>
            </div>
          </div>

          <div className="payment__items">
            <div className="payment__cost__container">
              <p className="payment__cost">
                2
                <span aria-hidden={true} className="star">
                  ★
                </span>
                <span className="visuallyhidden">Star</span>
                &nbsp;
                <span>per dollar</span>
              </p>
              <p>Pay as you go</p>
            </div>
            <div className="payment__item__container">
              <div className="payment__item__img__container">
                <Image
                  src="/2A.png"
                  alt=""
                  role="presentation"
                  layout="fixed"
                  width={112}
                  height={158}
                />
              </div>
              <div className="payment__item__details__container">
                <h3 className="payment__item__details__title">Preload</h3>
                <p className="payment__item__details__body">
                  To save time and earn Stars twice as fast, add money to your
                  digital Starbucks Card using any payment option. Scan and pay
                  in one step or order ahead in the app.
                </p>
              </div>
            </div>
            <div className="payment__item__container">
              <div className="payment__item__img__container">
                <Image
                  src="/2B.png"
                  alt=""
                  role="presentation"
                  layout="fixed"
                  width={112}
                  height={158}
                />
              </div>
              <div className="payment__item__details__container">
                <h3 className="payment__item__details__title">
                  Register your gift card
                </h3>
                <p className="payment__item__details__body">
                  Then use it to pay through the app. You can even consolidate
                  balances from multiple cards in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
