import React, { useState } from "react";

export default function Stars() {
  const [value, setValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [showAnimationSpan, setShowAnimationSpan] = useState(true);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  function handleInputFocus() {
    setShowAnimationSpan(true);
    setTimeout(() => {
      setShowAnimationSpan(false);
    }, 1300);
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
                    onBlur={() => setInputFocused(false)}
                    onClick={() => handleInputFocus()}
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
                  {showAnimationSpan && <span className="ripple"></span>}
                </div>
              </div>

              <button className="stars__form__button button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
