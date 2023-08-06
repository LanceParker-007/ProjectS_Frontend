import React from "react";
import "./FeaturesCard.scss";

const LandingPageLine = () => {
  const lineStyle = {
    width: "88%",
    margin: "0 auto",
    padding: "0 2rem",
    boxSizing: "border-box",
    border: "2px solid #000",
    // boxShadow: "0px 0px 10px aliceblue"
  };

  return <div style={lineStyle}></div>;
};

const FeaturesCard = ({
  FeaturesCardTitle,
  FeaturesCardDesc,
  FeaturesCardImg,
}) => {
  return (
    <>
      <div className="featuresCardContainer">
        <div className="featuresCardContainer-left">
          <h2 className="title">{FeaturesCardTitle}</h2>
          <p className="desc"> {FeaturesCardDesc}</p>
        </div>
        <div className="featuresCardContainer-right">
          <img src={FeaturesCardImg} alt="FeaturesCardImg" />
        </div>
      </div>
      <LandingPageLine />
    </>
  );
};

export default FeaturesCard;
