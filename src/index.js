import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Classcomp } from "./class&func/Classcomp";
import { Functionalcomp } from "./class&func/Functionalcomp";
import NetflixParent, { Netflixparent } from "./props/NetflixParent";
import { Statecomp } from "./State/Statecomp";
import Stylecomp from "./styles/stylecomp";
import { Jsxcomp } from "./JSX/jsxcomp";
import Effectcom from "./Hooks/Effectcom";
import GetProducts from "./Hooks/GetProducts";
import Customcomp from "./Hooks/Customcomp";
import Refcomp from "./Hooks/Refcomp";
import Memocomp from "./Hooks/Memocomp";
import Eventcomp  from "./events/Eventcomp";
import Conditioncomp from "./conditionalRendering/Conditioncomp";
import Home from "./Routing/Home";
import Contact from "./Routing/Contact";
import About from "./Routing/About";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Navbar } from "./Routing/Navbar";

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
      {/* <Customcomp/> */}

    {/* <Refcomp /> */}
    {/* <Memocomp /> */}

    {/* <Eventcomp /> */}
    {/* <Conditioncomp /> */}

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
