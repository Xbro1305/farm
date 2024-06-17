import React from "react";
import logo from "./images/logo.svg";
import main from "./images/main.svg";
import energy from "./images/energy.svg";
import first from "./images/Frame 25.svg";
import second from "./images/Frame 25 (1).svg";
import third from "./images/Frame 25 (2).svg";
import fourth from "./images/Frame 25 (3).svg";
import fifth from "./images/Frame 25 (4).svg";
import league from "./images/league.svg";
import group from "./images/Group 1000001775.svg";
import row from "./images/Group 1000001733.svg";
import flowers from "./images/flowers.svg";

export const App = () => {
  return (
    <div className="main">
      <h1>
        <p>
          <img src={logo} alt="" /> 349.917 B
        </p>
        <span>
          <img src={league} alt="" /> Wooden League
        </span>
      </h1>
      <img src={main} alt="" />
      <div className="footer">
        <div>
          <section>
            <h1>
              <img className="energy" src={energy} alt="" />
              1500/1500
            </h1>
            <span>Energy</span>
          </section>
          <img src={group} alt="" />
        </div>
        <div className="navigation">
          <a href="">
            <img src={first} alt="" />
            FARM
          </a>
          <a href="">
            <img src={second} alt="" />
            EARN
          </a>
          <a href="">
            <img src={third} alt="" />
            TAP
          </a>
          <a href="">
            <img src={fourth} alt="" />
            BOOST
          </a>
          <a href="">
            <img src={fifth} alt="" />
            STATS
          </a>
        </div>
      </div>
      <img src={row} className="row" alt="" />
      <img src={flowers} className="f1" alt="" />
      <img src={flowers} className="f2" alt="" />
      <img src={flowers} className="f3" alt="" />
    </div>
  );
};
