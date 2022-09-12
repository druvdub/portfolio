import React from "react";

const projectCards = ({
  cardTitle,
  cardDescription,
  cardSource,
  cardDemo,
  demoBoolean,
}) => {
  return (
    <>
      <div className="card">
        <div className="title">
          <h2>{cardTitle}</h2>
        </div>
        <hr />
        <div className="body">{cardDescription}</div>
        <div className="footer">
          <div className="source">{cardSource}</div>
          <div className="demo">{demoBoolean ? { cardDemo } : ""}</div>
        </div>
      </div>
    </>
  );
};

export default projectCards;
