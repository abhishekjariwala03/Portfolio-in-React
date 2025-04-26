import React from "react";
import { socialMediaLinks } from "../../Portfolio.jsx";
import "./Social.scss";

function Social() {
  return (
    <div className="socials">
      <a className="icon-button" href={socialMediaLinks.github}>
        <i className="fab fa-github git"></i>
      </a>

      <a className="icon-button" href={socialMediaLinks.instagran}>
        <i className="fab fa-instagram insta"></i>
      </a>

      <a className="icon-button" href={socialMediaLinks.medium}>
        <i className="fab fa-medium medium"></i>
      </a>

      <a className="icon-button" href={socialMediaLinks.linkdin}>
        <i className="fab fa-linkedin linkdin"></i>
      </a>

      <a className="icon-button" href={socialMediaLinks.x}>
        <i className="fab fa-x x"></i>
      </a>
    </div>
  );
}

export default Social;
