import React from "react";

export default function Terms() {
  return (
    <section className="terms-section">
      <div className="terms__bground">
        <div className="container">
          <div className="terms__inner__container">
            <div className="terms__grid">
              <p className="terms__body">
                At participating stores. Restrictions apply.
              </p>
              <div className="terms__grid__item">
                <h2 className="terms__grid__item__heading" tabIndex={-1}>
                  Earning Stars
                </h2>
                <p className="terms__body">
                  Stars cannot be earned on purchases of alcohol, Starbucks
                  Cards or Starbucks Card reloads.
                </p>
                <p className="terms__body">
                  Earn 1 Star per $1 spent when you scan your member barcode in
                  the app, then pay with cash, credit/debit cards or mobile
                  wallets at participating stores. You can also earn 1 Star per
                  $1 spent when you link a payment method and pay directly
                  through the app.
                </p>
                <p className="terms__body">
                  Earn 2 Stars per $1 spent when you load funds and pay with
                  your digital Starbucks Card in the app. You can also earn 2
                  Stars per $1 spent when you pay in-person at a participating
                  store with your registered physical Starbucks Card or scan
                  your member barcode in the app, and then use any physical
                  Starbucks Card (regardless of whether it is registered) to
                  complete the purchase.
                </p>
              </div>
              <div className="terms__grid__item">
                <h2 className="terms__grid__item__heading" tabIndex={-1}>
                  Terms of Use
                </h2>
                <p className="terms__body">
                  For full program details visit{" "}
                  <a
                    aria-describedby="externalLink4"
                    className="terms__body__link"
                    href="https://www.starbucks.com/rewards/terms/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="terms__body__link__text">
                      starbucks.com/rewards/terms
                    </span>
                    <span
                      aria-hidden="true"
                      className="visuallyhidden"
                      id="externalLink4"
                    >
                      opens in new window
                    </span>
                    <svg
                      aria-hidden="true"
                      className="external-link icon "
                      focusable={false}
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
                    </svg>
                  </a>
                  .
                </p>
                <p className="terms__body">
                  * Earn 1 Star per $1 when digitally loading your Starbucks
                  Card with your Starbucks® Rewards Visa® Card: See your Card
                  Rewards Program Agreement for more details.
                </p>
                <p className="terms__body">
                  Starbucks® Rewards benefits are available at participating
                  Starbucks stores. Not all stores have the ability to honor
                  Rewards at this time. Visit the{" "}
                  <a
                    aria-describedby="externalLink5"
                    className="terms__body__link"
                    href="/store-locator"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="terms__body__link__text">
                      Starbucks Store Locator
                    </span>
                    <span
                      aria-hidden="true"
                      className="visuallyhidden"
                      id="externalLink5"
                    >
                      opens in new window
                    </span>
                    <svg
                      aria-hidden="true"
                      className="external-link icon "
                      focusable={false}
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
                    </svg>
                  </a>{" "}
                  and search for locations honoring “Redeem Rewards”.
                </p>
                <p className="terms__body">
                  Deposit and credit card products provided by JPMorgan Chase
                  Bank, N.A. Member FDIC
                </p>
              </div>
              <div className="terms__grid__item">
                <h2 className="terms__grid__item__heading" tabIndex={-1}>
                  Benefits
                </h2>
                <p className="terms__body">
                  Free refills available during same in-store visit only. To
                  qualify for the Birthday Reward, you must have made at least
                  one Star-earning transaction.
                </p>
              </div>
              <div className="size12of12 md-size6of12 gridItem md-pb0 md-pl5">
                <h2 className="terms__grid__item__heading" tabIndex={-1}>
                  Redeeming Rewards
                </h2>
                <p className="terms__body">
                  Rewards cannot be redeemed for alcoholic beverages or
                  multi-serve items. Not all stores honor tiered Rewards. Select
                  stores redeem 150 Stars for free food or drink items only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
