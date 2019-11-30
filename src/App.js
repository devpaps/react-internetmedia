import React from "react";

import { Helmet } from "react-helmet";

import HeroSection from "./components/hero";
import NavSection from "./components/navbar";
import QuoteSection from "./components/quote";
import ApplicationSection from "./components/application";
import BlogSection from "./components/blog";
import FooterSection from "./components/footer";
import SpaceSection from "./components/spaceImage";

import "./assets/css/normalize.css";
import "./assets/css/global.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Internetmedia Front-end test</title>
      </Helmet>
      <NavSection />
      <HeroSection />
      <QuoteSection />
      <ApplicationSection />
      <BlogSection />
      <FooterSection />
      <SpaceSection />
    </>
  );
}

export default App;
