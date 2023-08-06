import React from "react";
import "./Header.scss";
// import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // const location = useLocation();
  return (
    <nav>
      <div className="siteLogo">
        <a href="/">
          <h2>RENT-A-GIRLFRIEND</h2>
        </a>
      </div>
      {/* <div className="landingPageNavigationLinks">
        {location.pathname === "/" && (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/explore">Explore</Link>
          </>
        )}
      </div> */}
    </nav>
  );
};

export default Header;
