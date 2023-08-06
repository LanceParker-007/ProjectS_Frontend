import React from "react";
import "./Footer.scss";
import { Heading, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* <p>Questions? Call 000-800-919-1694</p> */}
      {/* <div>
        <Link to="/" className="footerLinks">
          FAQ
        </Link>
        <Link to="/" className="footerLinks">
          Help Centre
        </Link>
        <Link to="/" className="footerLinks">
          Account
        </Link>

        <Link to="/" className="footerLinks">
          Investor Relations
        </Link>
        <Link to="/" className="footerLinks">
          Jobs
        </Link>

        <Link to="/" className="footerLinks">
          Terms of Use
        </Link>
        <Link to="/" className="footerLinks">
          Privacy
        </Link>
        <Link to="/" className="footerLinks">
          Cookie Preferences
        </Link>
        <Link to="/" className="footerLinks">
          Corporate Informtion
        </Link>
        <Link to="/" className="footerLinks">
          Contact Us
        </Link>

        <Link to="/" className="footerLinks">
          Legal Notices
        </Link>
      </div> */}
      <Heading fontSize={"x-large"} mb={6}>
        @Rent-A-Girlfriend
      </Heading>
      <a href="#ExcitedPeopleSection">
        <Text>
          If interested, please show it by joining the excited people list!{" "}
          Click here.
        </Text>
      </a>
    </footer>
  );
};

export default Footer;
