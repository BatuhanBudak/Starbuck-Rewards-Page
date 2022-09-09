import React from "react";
import Banner from "./Banner";
import Extras from "./Extras";
import Hero from "./Hero";
import Intro from "./Intro";
import TabsSection from "./TabsSection";
import Payment from "./Payment";
import Stars from "./Stars";
import Qustions from "./Qustions";
import Terms from "./Terms";

export default function Main() {
  return (
    <main role="main" id="content">
      <Banner />
      <Hero />
      <Intro />
      <TabsSection />
      <Extras />
      <Payment />
      <Stars />
      <Qustions />
      <Terms />
    </main>
  );
}
