import React from "react";
import ApplicationStyle from "../components/modules/application.module.css";

import RigthArrow from "../assets/images/right-arrow.svg";

const ApplicationSection = () => {
  return (
    <section className={ApplicationStyle.application}>
      <div className={ApplicationStyle.application__image}></div>
      <div className={ApplicationStyle.application__right__box}>
        <h1 className={ApplicationStyle.application__right__box__header}>
          Kreativ utvecklare sökes!
        </h1>
        <p>
          Ditt fokus kommer vara på front end-utveckling, men du kan beroende på
          din profil även få uppgifter inom back end.
        </p>
        <p>
          {" "}
          Vi ser att du tycker om att utvecklas inom ditt yrke och har ett
          intresse av att lära dig nya saker och arbetssätt, att tänka utanför
          boxen och rent allmänt är en driven problemlösare. Som arbetsgivare
          ser vi det som vårt ansvar att du får utvecklas, både genom interna
          workshops och externa utbildningar.
        </p>
        <h2 className={ApplicationStyle.application__right__box__sub}>
          Vi söker dig som
        </h2>
        <ul>
          <li>
            Har mycket goda kunskaper i och god erfarenhet av att arbeta med
            HTML, CSS och JavaScript
          </li>
          <br />
          <li>
            Har goda kunskaper i PHP och WordPress, gärna med inriktning mot
            utveckling av teman och tillägg
          </li>
          <br />
          <li>Förstår humorn i https://userinyerface.com/</li>
        </ul>
        <div className={ApplicationStyle.button}>
          <a href="# " className={ApplicationStyle.button__link}>
            Sök tjänsten idag{" "}
            <img
              src={RigthArrow}
              alt="höger pil ikon"
              className={ApplicationStyle.button__link__arrow}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
