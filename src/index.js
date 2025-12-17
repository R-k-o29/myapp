import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Classcomp } from "./class&func/Classcomp";
import { Functionalcomp } from "./class&func/Functionalcomp";
import NetflixParent, { Netflixparent } from "./props/NetflixParent";
import { Statecomp } from "./State/Statecomp";
import Stylecomp from "./styles/stylecomp";
import { Jsxcomp } from "./JSX/jsxcomp";
import Effectcom from "./Hooks/Effectcom";
import GetProducts from "./Hooks/GetProducts";
import Customcomp from "./Hooks/Customcomp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Classcomp /> */}
    {/* <Functionalcomp /> */}
    {/* <Netflixparent /> */}
    {/* <Statecomp /> */}

    {/* <Stylecomp />
    <Jsxcomp />
    <Effectcom /> */}

    {/* <GetProducts /> */}
      <Customcomp/>

  </React.StrictMode>
);
