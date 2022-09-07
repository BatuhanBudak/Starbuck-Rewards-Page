import React from "react";
import Banner from "./Banner";
import Hero from "./Hero";
import Intro from "./Intro";

export default function Main() {
  return (
    <main role="main" id="content">
      <Banner />
      <Hero />
      <Intro />
    </main>
  );
}
