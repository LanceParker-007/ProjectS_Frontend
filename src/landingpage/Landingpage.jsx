import React from "react";
import Header from "./Header/Header";
import "./Landingpage.scss";
import LandingPageSection1 from "./LandingPageSection1/LandingPageSection1";
import LandingPageSection2 from "./LandingPageSection2/LandingPageSection2";
import Footer from "./Footer/Footer";
import AddToExcitedList from "../Components/AddToExcitedList/AddToExcitedList";

const Landingpage = () => {
  return (
    <>
      <Header />
      <div className="landingPageBody">
        <LandingPageSection1 />
        <div
          id="ExcitedPeopleSection"
          style={{ textAlign: "center", marginBottom: "1rem" }}
        >
          <AddToExcitedList />
        </div>
        <LandingPageSection2 />
        <Footer />
      </div>
    </>
  );
};

export default Landingpage;
