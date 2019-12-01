import React, { useState, useEffect } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";
import SpaceStyle from "../components/modules/spaceImage.module.css";

const SpaceSection = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getMonth() + 1;
  const day = date.getUTCDate();

  const APIURL = `https://apodapi.herokuapp.com/api/?date=${year}-${month}-${day}`;

  // Hämta data för att visa dagens bild
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    async function getData() {
      try {
        const result = await axios(`${APIURL}`);
        setData(result.data);
      } catch (error) {
        console.log(error, "Något gick fel.");
        alert("Något gick fel, error");
      }
    }
    getData();
  }, [APIURL]);

  //Öppna större bild
  const openPicture = hdimage => {
    console.log(window.open(hdimage, "_self"));
  };

  return (
    <section className={SpaceStyle.space}>
      <h1 className={SpaceStyle.space__header}>Dagens Bild</h1>
      <LazyLoad height={200} once>
        <img
          className={SpaceStyle.space__image}
          src={data.url}
          alt={data.title}
          onClick={() => {
            openPicture(`${data.hdurl}`);
          }}
        />
      </LazyLoad>
      <div className={SpaceStyle.space__text}>
        <h2 className={SpaceStyle.space__header__sub}>{data.title}</h2>
        <p className={SpaceStyle.space__image__description}>
          {data.description}
        </p>
      </div>
    </section>
  );
};

export default SpaceSection;
