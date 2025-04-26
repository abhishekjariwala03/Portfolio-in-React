import React, { useState } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import { greeting } from "../../Portfolio";
function Header() {
  return (
    <Headroom>
      <header className="dark-menu header">
        <a className="logo" href="/">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={"navicon navicon-dark"}></span>
        </label>
        <ul className={"dark-menu menu"}>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="/">Work Experience</a>
          </li>
          <li>
            <a href="/">Open Source</a>
          </li>
          <li>
            <a href="/">Achivements</a>
          </li>
          <li>
            <a href="#contact">Contact me </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
