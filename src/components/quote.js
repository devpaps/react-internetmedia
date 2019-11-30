import React from "react";
import QuoteStyle from "../components/modules/quote.module.css";

import QuoteSymbol from "../assets/images/right-quotes-symbol.svg";

const QuoteSection = () => {
  return (
    <section className={QuoteStyle.quote}>
      <img
        src={QuoteSymbol}
        alt="quote symbol"
        className={QuoteStyle.quote__symbol}
      />
      <p className={QuoteStyle.quote__text}>
        Vi söker dig som brinner för webbutveckling och vill nå framgång
        tillsammans med oss och våra kunder. Du är lösningsfokuserad med en
        kreativ inställning och vill vara en viktig kugge i en tajt projektgrupp
        som har jäkligt roligt på jobbet på vårt kontor i centrala Östersund.
      </p>
      <p className={QuoteStyle.quote__sub__text}>internetmedia</p>
    </section>
  );
};

export default QuoteSection;
