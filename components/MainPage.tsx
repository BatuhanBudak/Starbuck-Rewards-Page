import React from "react";
import Banner from "./Banner";
import Extras from "./Extras";
import Hero from "./Hero";
import Intro from "./Intro";
import TabsSection from "./TabsSection";
import Payment from "./Payment";
import Stars from "./Stars";

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
    </main>
  );
}
