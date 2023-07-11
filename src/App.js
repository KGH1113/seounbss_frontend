import React from "react";

import "./App.css";

import Navbar from "./components/Navbar.js";
import TopContainer from "./components/TopContainer";
import Faq from "./components/Faq";
import SongRequest from "./components/SongRequest";
import SuggestionRequest from "./components/SuggestionRequest";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <title>서운중학교 방송부</title>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      ></link>

      <div className="main">
        <Navbar selectedParam={1} mobileLogo={true} />
        <TopContainer />
        <Faq />
        <ins
          className="kakao_ad_area"
          style={{ display: "block" }}
          data-ad-unit="DAN-LyRAGitAZb2GFm5H"
          data-ad-width="320"
          data-ad-height="50"
        ></ins>
        <script
          type="text/javascript"
          src="//t1.daumcdn.net/kas/static/ba.min.js"
          async
        ></script>
        <SongRequest />
        <SuggestionRequest />
        <Footer />
      </div>
    </>
  );
}

export default App;
