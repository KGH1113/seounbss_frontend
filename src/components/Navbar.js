import React from "react";

const Navbar = ({ selectedParam }) => {
  const getNavItemClassName = (index) => {
    if (index === selectedParam) {
      return "item selected";
    }
    return "item";
  };

  return (
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
  );
};

export default Navbar;
