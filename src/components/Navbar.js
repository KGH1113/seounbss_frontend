import { React, useState, useEffect } from "react";
import logo from "./logo.png";

const Navbar = ({ selectedParam, mobileLogo }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  const getNavItemClassName = (index) => {
    if (index === selectedParam) {
      return "item selected";
    }
    return "item";
  };

  const mobileLogoBlocked = (bool) => {
    if (bool && innerWidth <= 700) {
      return { display: "block" };
    } else {
      return { display: "none" };
    }
  };

  return (
    <>
      <div className="navbar">
        <a href="/" className="logo">
          SeounBSS
        </a>
        <div className="nav-links">
          <span className={getNavItemClassName(1)}>SeounBSS 소개</span>
          <span className={getNavItemClassName(2)}>FAQ</span>
          <span className={getNavItemClassName(3)}>점심시간 노래 신청하기</span>
          <span className={getNavItemClassName(4)}>건의사항 신청하기</span>
        </div>
        <button className="toggler">
          <i className="bx bx-menu"></i>
        </button>
      </div>
      <img
        src={logo}
        className="nft-pic-mobile"
        alt="logo"
        style={mobileLogoBlocked(mobileLogo)}
      />
      <ins
        className="kakao_ad_area"
        style={{ display: "block" }}
        data-ad-unit="DAN-1qlix4UzmzunO3Yr"
        data-ad-width="320"
        data-ad-height="50"
      ></ins>
      <script
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      ></script>
    </>
  );
};

export default Navbar;
