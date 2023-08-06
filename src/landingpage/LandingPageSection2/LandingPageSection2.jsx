import React from "react";
import features from "./FeaturesCardsDetails.json";
import FeaturesCard from "./FeaturesCard/FeaturesCard";

const LandingPageSection2 = () => {
  return (
    <section className="landingPageSection2">
      {features.map((feature, index) => (
        <FeaturesCard
          key={index}
          FeaturesCardTitle={feature.title}
          FeaturesCardDesc={feature.desc}
          FeaturesCardImg={feature.imgPath}
        />
      ))}
    </section>
  );
};

export default LandingPageSection2;
