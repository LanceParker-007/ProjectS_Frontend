import Lottie from "lottie-react";
import animationData from "./ChattingIllustration.json";
import React, { useRef } from "react";

const LearningLottie = () => {
  const phoneRef = useRef();
  return (
    <>
      <Lottie
        animationData={animationData}
        lottieRef={phoneRef}
        style={{
          height: "16rem",
          boxShadow: "0 0 2rem black",
          borderRadius: "0.4rem",
        }}
      />
    </>
  );
};

export default LearningLottie;
