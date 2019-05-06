import React from "react";
import "./Cards.css";

const Cards = props => {
  console.log(props.image);
  return (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        {/*<img alt={props.name} src={process.env.PUBLIC_URL + props.image} />*/}
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
};

export default Cards;