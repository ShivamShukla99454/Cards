import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div class="one">
      <h1>{props.first}</h1>
      <h1>{props.last}</h1>
      <p>
        <a href="https://www.moneycontrol.com/markets/global-indices/">
          <img src={props.image} />
        </a>
      </p>
    </div>
  );
};

export default Card;
