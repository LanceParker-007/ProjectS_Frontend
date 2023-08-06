import React from "react";
import LearningLottie from "../../Assets/LearningLottie";
import { Link } from "react-router-dom";

const LandingPageSection1 = () => {
  return (
    <section className="landingPageSection1">
      <div className="section1_leftSide">
        <LearningLottie />
      </div>
      <div className="section1_rightSide">
        <div className="section1_rightSide_div1">
          <h3>Sitting IDLE?</h3>
          <h4>Nothing to Do??</h4>
          <h2>
            Get yourself a <br />
            <Link>
              <button>Girlfriend</button>
            </Link>
            Bro!
          </h2>
        </div>
      </div>
    </section>
  );
};

export default LandingPageSection1;
