import logo from "./logo.png";

const TopContainer = () => {
  return (
    <div className="top-container">
      <div className="info-box">
        <p className="header">SeounBSS</p>
        <p className="info-text">
          BSS: "Broadcasting of Student System"의 약자
        </p>
        <p className="info-text">
          서운중학교 방송부(A.K.A. Seoun BSS)는 서운중학교의 동아리이며,
          점심시간 음악방송, 교내방송, 서운축제 등 교내의 방송을 담당합니다.
        </p>
      </div>
      <div className="nft-box">
        <img src={logo} className="nft-pic" alt="logo" />
        <div className="nft-content">
          <div className="info">
            <div>
              <p>SeounBSS Logo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
