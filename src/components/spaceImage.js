import React, { useState, useEffect } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";
import SpaceStyle from "../components/modules/spaceImage.module.css";

// Hämta data för att visa dagens bild

/* const FetchAPI = () => {
  fetch(`${APIURL}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  })
  .catch(err => console.log(err, "Fel!"));
};

FetchAPI(); */

const SpaceSection = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getMonth() + 1;
  const day = date.getUTCDate();

  const APIURL = `https://apodapi.herokuapp.com/api/?date=${year}-${month}-${day}`;

  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    async function getData() {
      const result = await axios(`${APIURL}`);
      setData(result.data);
    }
    getData();
  }, [APIURL]);

  return (
    <section className={SpaceStyle.space}>
      <h1 className={SpaceStyle.space__header}>Dagens Bild</h1>
      <LazyLoad height={200} once>
        <img
          className={SpaceStyle.space__image}
          src={data.url}
          alt={data.title}
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
