import React from "react";
import HeroStyle from "../components/modules/hero.module.css";

const HeroSection = () => {
  return (
    <section className={HeroStyle.hero}>
      <div className={HeroStyle.hero__text}>
        <h1 className={HeroStyle.hero__text__lead}>FRONTEND UTVECKLARE</h1>
        <h2 className={HeroStyle.hero__text__sub}>
          Norrlands trevligaste byrå söker självgående kodapa till kreativ
          projektgrupp. Är det du?
        </h2>
      </div>
      <div className={HeroStyle.hero__image}></div>
      <div className={HeroStyle.scroll__box}></div>
    </section>
  );
};

export default HeroSection;
