import React from "react";
import BlogStyle from "../components/modules/blog.module.css";

import Barnard from "../assets/images/Barnard150Seahorse1024.jpg";
import VanGogh from "../assets/images/StarryNight_VanGogh_970.jpg";
import MilkyWay from "../assets/images/MilkyWaySaltFlat_Huerta_960_annotated.jpg";

const BlogSection = () => {
  return (
    <section className={BlogStyle.blog}>
      <div className={BlogStyle.blog__images}>
        <div className={BlogStyle.blog__images__barnard}>
          <img
            src={Barnard}
            alt="Barnard Seahorse"
            className={BlogStyle.blog__images__individuals}
          />
          <div className={BlogStyle.blog__images__text}>
            <h1 className={BlogStyle.blog__images__header}>
              Dark Seahorse in Cepheus
            </h1>
          </div>
          <h5 className={BlogStyle.blog__images__header__sub}>
            Sergio Kaminsky
          </h5>
        </div>
        <div className={BlogStyle.blog__images__starry}>
          <img
            src={VanGogh}
            alt="Starry Night - Van Gogh"
            className={BlogStyle.blog__images__individuals}
          />
          <div className={BlogStyle.blog__images__text}>
            <h1 className={BlogStyle.blog__images__header}>
              Starry Night by Vincent van Gogh
            </h1>
          </div>
          <h5 className={BlogStyle.blog__images__header__sub}>
            Vincent van Gogh
          </h5>
        </div>
        <div className={BlogStyle.blog__images__milkyway}>
          <img
            src={MilkyWay}
            alt="Vintergatan"
            className={BlogStyle.blog__images__individuals}
          />
          <div className={BlogStyle.blog__images__text}>
            <h1 className={BlogStyle.blog__images__header}>
              Night Sky Reflections from the World's Largest Mirror
            </h1>
          </div>
          <h5 className={BlogStyle.blog__images__header__sub}>
            Jheison Huerta
          </h5>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
