import { useState } from "react";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function TabsSection() {
  const [firstImgActive, setFirstImgActive] = useState(true);
  const [secondImgActive, setSecondImgActive] = useState(false);
  const [thirdImgActive, setThirdImgActive] = useState(false);
  const [fourthImgActive, setFourthImgActive] = useState(false);
  const [fifthImgActive, setFifthImgActive] = useState(false);

  function closeAllImgs() {
    setFirstImgActive(false);
    setSecondImgActive(false);
    setThirdImgActive(false);
    setFourthImgActive(false);
    setFifthImgActive(false);
  }

  return (
    <section className="section">
      <Tabs className="tabs__container">
        <div className="tabs__header__container">
          <h2 className="tabs__header">Get your favorites for free</h2>
        </div>
        <div>
          <TabList
            aria-owns="tab-0 tab-1 tab-2 tab-3 tab-4"
            className="tabs__buttons__container"
            role="tablist"
            aria-label="Reward levels"
          >
            <Tab
              aria-controls="tabpanel-0"
              aria-selected={firstImgActive}
              id="tab-0"
              role="tab"
            >
              <span className="tabs__button__price">
                25
                <span aria-hidden="true" className="tabs__button__star">
                  ★
                </span>{" "}
                <span className="visuallyhidden">Stars</span>
              </span>
              <div className="tabs__slider" id="slider-inside-0"></div>
            </Tab>
            <Tab
              aria-controls="tabpanel-1"
              aria-selected={secondImgActive}
              id="tab-1"
              role="tab"
              onClick={() => {
                closeAllImgs();
                setSecondImgActive(true);
              }}
            >
              <span className="tabs__button__price">
                50
                <span aria-hidden="true" className="tabs__button__star">
                  ★
                </span>{" "}
                <span className="visuallyhidden">Stars</span>
              </span>
              <div className="tabs__slider" id="slider-inside-1"></div>
            </Tab>
            <Tab
              aria-controls="tabpanel-2"
              aria-selected={thirdImgActive}
              id="tab-2"
              role="tab"
              onClick={() => {
                closeAllImgs();
                setThirdImgActive(true);
              }}
            >
              <span className="tabs__button__price">
                150
                <span aria-hidden="true" className="tabs__button__star">
                  ★
                </span>{" "}
                <span className="visuallyhidden">Stars</span>
              </span>
              <div className="tabs__slider" id="slider-inside-2"></div>
            </Tab>
            <Tab
              aria-controls="tabpanel-3"
              aria-selected={fourthImgActive}
              id="tab-3"
              role="tab"
              onClick={() => {
                closeAllImgs();
                setFourthImgActive(true);
              }}
            >
              <span className="tabs__button__price">
                200
                <span aria-hidden="true" className="tabs__button__star">
                  ★
                </span>{" "}
                <span className="visuallyhidden">Stars</span>
              </span>
              <div className="tabs__slider" id="slider-inside-3"></div>
            </Tab>
            <Tab
              aria-controls="tabpanel-4"
              aria-selected={fifthImgActive}
              id="tab-4"
              role="tab"
              onClick={() => {
                closeAllImgs();
                setFifthImgActive(true);
              }}
            >
              <span className="tabs__button__price">
                400
                <span aria-hidden="true" className="tabs__button__star">
                  ★
                </span>{" "}
                <span className="visuallyhidden">Stars</span>
              </span>
              <div className="tabs__slider" id="slider-inside-4"></div>
            </Tab>
          </TabList>

          <div className="tabs__tab-panels-container">
            <TabPanel aria-labelledby="tab-0" id="tabpanel-0" role="tabpanel">
              <div className="tabs__tabContent">
                <div className="tabs__tabContent__wrapper">
                  <div className="tabs__tabContent__img__container">
                    <div className="tabs__tabContent__img__padding"></div>
                    <div className="absoluteSpread">
                      <Image
                        className="tabs__tabContent__img tabContent__image-fade--show"
                        src="/025.png"
                        alt=""
                        layout="fill"
                      />
                    </div>
                  </div>
                </div>
                <div className="tabs__tabContent__details">
                  <h3
                    className="tabs__tabContent__details__header"
                    tabIndex={-1}
                  >
                    Customize your drink
                  </h3>
                  <p className="tabs__tabContent__details__body">
                    Make your drink just right with an extra espresso shot,
                    dairy substitute or a dash of your favorite syrup.
                  </p>
                </div>
              </div>
            </TabPanel>

            <TabPanel aria-labelledby="tab-1" id="tabpanel-1" role="tabpanel">
              <div className="tabs__tabContent">
                <div className="tabs__tabContent__wrapper">
                  <div className="tabs__tabContent__img__container">
                    <div className="tabs__tabContent__img__padding"></div>
                    <div className="absoluteSpread">
                      <Image
                        className="tabs__tabContent__img tabContent__image-fade--show"
                        src="/050.png"
                        alt=""
                        layout="fill"
                      />
                    </div>
                  </div>
                </div>
                <div className="tabs__tabContent__details">
                  <h3
                    className="tabs__tabContent__details__header"
                    tabIndex={-1}
                  >
                    Brewed hot coffee, bakery item or hot tea
                  </h3>
                  <p className="tabs__tabContent__details__body">
                    Pair coffee cake or an almond croissant with your fresh cup
                    of hot brew.
                  </p>
                </div>
              </div>
            </TabPanel>

            <TabPanel aria-labelledby="tab-2" id="tabpanel-2" role="tabpanel">
              <div className="tabs__tabContent">
                <div className="tabs__tabContent__wrapper">
                  <div className="tabs__tabContent__img__container">
                    <div className="tabs__tabContent__img__padding"></div>
                    <div className="absoluteSpread">
                      <Image
                        className="tabs__tabContent__img tabContent__image-fade--show"
                        src="/150.png"
                        alt=""
                        layout="fill"
                      />
                    </div>
                  </div>
                </div>
                <div className="tabs__tabContent__details">
                  <h3
                    className="tabs__tabContent__details__header"
                    tabIndex={-1}
                  >
                    Handcrafted drink, hot breakfast or parfait
                  </h3>
                  <p className="tabs__tabContent__details__body">
                    Have a really good morning with a breakfast sandwich,
                    oatmeal or your favorite drink.
                  </p>
                </div>
              </div>
            </TabPanel>

            <TabPanel aria-labelledby="tab-3" id="tabpanel-3" role="tabpanel">
              <div className="tabs__tabContent">
                <div className="tabs__tabContent__wrapper">
                  <div className="tabs__tabContent__img__container">
                    <div className="tabs__tabContent__img__padding"></div>
                    <div className="absoluteSpread">
                      <Image
                        className="tabs__tabContent__img tabContent__image-fade--show"
                        src="/200.png"
                        alt=""
                        layout="fill"
                      />
                    </div>
                  </div>
                </div>
                <div className="tabs__tabContent__details">
                  <h3
                    className="tabs__tabContent__details__header"
                    tabIndex={-1}
                  >
                    Salad, sandwich or protein box
                  </h3>
                  <p className="tabs__tabContent__details__body">
                    Nourish your day with a hearty Chipotle Chicken Wrap or Eggs
                    &amp; Cheese Protein Box.
                  </p>
                </div>
              </div>
            </TabPanel>

            <TabPanel aria-labelledby="tab-4" id="tabpanel-4" role="tabpanel">
              <div className="tabs__tabContent">
                <div className="tabs__tabContent__wrapper">
                  <div className="tabs__tabContent__img__container">
                    <div className="tabs__tabContent__img__padding"></div>
                    <div className="absoluteSpread">
                      <Image
                        className="tabs__tabContent__img tabContent__image-fade--show"
                        src="/400.png"
                        alt=""
                        layout="fill"
                      />
                    </div>
                  </div>
                </div>
                <div className="tabs__tabContent__details">
                  <h3
                    className="tabs__tabContent__details__header"
                    tabIndex={-1}
                  >
                    Select merchandise or at-home coffee
                  </h3>
                  <p className="tabs__tabContent__details__body">
                    Take home a signature cup, a bag of coffee or your choice of
                    select coffee accessories.
                  </p>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </section>
  );
}
