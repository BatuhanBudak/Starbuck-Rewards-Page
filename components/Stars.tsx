import React, { useState } from "react";

export default function Stars() {
  const [value, setValue] = useState();
  const [inputFocused, setInputFocused] = useState(false);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="stars__wrapper">
          <div className="stars__form__container">
            <h2 className="stars__form__title">Star Codes</h2>
            <p className="stars__body">
              Yesssss. You’ve got Stars in your hand. Enter your code here and
              we’ll add Stars to your account.
            </p>
            <form className="stars__form">
              <div className="stars__form__input-base">
                <div className="stars__form__input-base__child-wrapper">
                  <input
                    className="stars__input"
                    type="text"
                    id="stars"
                    name="stars"
                    placeholder="name"
                    value={value}
                    onChange={(e) => handleChange(e)}
                    onFocus={() => {
                      setInputFocused(true);
                    }}
                  />
                  <label
                    htmlFor="stars"
                    className={`${
                      inputFocused ? "input-active" : ""
                    } stars__form__label`}
                  >
                    <span className="green">* </span>
                    Enter your Star Code
                  </label>
                </div>
              </div>

              <button className="stars__form__button button">Submit</button>
            </form>
          </div>
          <div className="stars__questions__container">
            <h2 className="stars__questions__title">Questions?</h2>
            <p className="stars__questions__body">
              We want to help in any way we can. You can ask your barista
              anytime or we’ve answered the most commonly asked questions
              <a
                aria-describedby="external-link"
                className="stars__questions__body__link"
                href="https://customerservice.starbucks.com/app/answers/list/p/552"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="stars__questions__body__link__text">
                  right over here
                </span>
                <span
                  aria-hidden="true"
                  className="visuallyhidden"
                  id="external-link"
                >
                  opens in new window
                </span>
                <svg
                  aria-hidden="true"
                  className="icon"
                  focusable={false}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
