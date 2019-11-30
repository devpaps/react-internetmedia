import React from "react";
import FooterStyle from "../components/modules/footer.module.css";

import PurpleLogo from "../assets/images/Internetmedia_Purple_RGB.png";
import FacebookLogo from "../assets/images/facebook-logo.svg";
import LinkedInLogo from "../assets/images/linkedin.svg";

const FooterSection = () => {
  return (
    <section className={FooterStyle.footer}>
      <img
        src={PurpleLogo}
        alt="Våran logotyp"
        className={FooterStyle.footer__logo}
      />
      <h1>
        I nära dialog med dig skapar och utvecklar vi ditt företags identitet,
        attraktionskraft och lönsamhet för att säkerställa maximal affärsnytta
      </h1>
      <div className={FooterStyle.footer__contact}>
        <div className={FooterStyle.footer__contact__left}>
          <h3>Besök oss</h3>
          <h5>Storgatan 39</h5>
          <h5>831 35 Östersund</h5>
        </div>
        <div className={FooterStyle.footer__contact__center}>
          <h3>Kontakta oss</h3>
          <div>
            <a href="tel:0637010812">063 - 701 08 12</a>
          </div>
          <div>
            <a href="mailto:info@internetmedia.se">info@internetmedia.se</a>
          </div>
        </div>
        <div className={FooterStyle.footer__contact__right}>
          <h3>Följ oss</h3>
          <div className={FooterStyle.footer__contact__right__logos}>
            <img src={FacebookLogo} alt="Facebook logo" />
            <img src={LinkedInLogo} alt="LinkedIn logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
