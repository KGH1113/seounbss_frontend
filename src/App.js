import React from "react";

import "./App.css";
import logo from "./components/logo.png";

import Navbar from "./components/Navbar.js";
import TopContainer from "./components/TopContainer";
import Faq from "./components/Faq";
import SongRequest from "./components/SongRequest";
import SuggestionRequest from "./components/SuggestionRequest";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>

      <div className="main">
        <Navbar selectedParam={1} />
        <img src={logo} className="nft-pic-mobile" alt="logo" />
        <TopContainer />
        <Faq />
        <SongRequest />
        <SuggestionRequest />
        <Footer />
      </div>
    </>
  );
}

export default App;
