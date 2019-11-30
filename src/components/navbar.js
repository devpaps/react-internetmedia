import React from "react";
import NavStyle from "../components/modules/navbar.module.css";

import Logo from "../assets/images/Internetmedia_White_RGB.png";
import MenyIcon from "../assets/images/list-menu.svg";

const NavbarSection = () => {
  return (
    <nav>
      <div className={NavStyle.navWrapper}>
        <div>
          <a href="# ">
            <img src={Logo} alt="Logga" className={NavStyle.logoIkon} />
          </a>
        </div>
        <img
          src={MenyIcon}
          alt="meny ikon"
          className={NavStyle.hamburgerIkon}
        />
      </div>
    </nav>
  );
};

export default NavbarSection;
