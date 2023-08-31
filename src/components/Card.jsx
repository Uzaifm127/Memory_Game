import React from "react";

const Card = ({ frontContent, cardClickEvent, style, backImage }) => {
  return (
    <div className="card" onClick={cardClickEvent} style={style}>
      <div className="sides front">{frontContent}</div>
      <div
        className="sides back"
        style={{ backgroundImage: `url(${backImage})` }}
      ></div>
    </div>
  );
};

export default Card;
