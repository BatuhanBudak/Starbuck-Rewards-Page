import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import Intro from "./Intro";
import TabsSection from "./TabsSection";

export default function Main() {
  return (
    <main role="main" id="content">
      <Banner />
      <Hero />
      <Intro />
      <TabsSection />
    </main>
  );
}
