import logo from './logo.png'

const Faq = () => {
  return (
    <div className="top-container">
      <div className="nft-box">
        <img src={logo} className="nft-pic" alt="logo" />
        <div className="nft-content">
          <div className="info">
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-box">
        <p className="header">FAQ</p>
        <p className="info-text">자주 물어보는 질문</p>
        <p className="info-text">
          Q: 방송부원은 어떻게 될 수 있나요?
          <br />
          A: 신입부원 모집은 대체로 3월 초에 진행합니다. 3월 초에 나오는
          신입부원 모집 공고를 통해 지원하신 다음, 1차 서류 전형에 합격하신 후,
          최종적으로 2차 면접 전형에 합격하시면 방송부원이 되실 수 있습니다.
        </p>
        <p className="info-text">
          Q: 신청곡은 어떻게 틀어지나요?
          <br />
          A: 신청 사이트를 통해 신청곡을 신청하시면, 내부 시스템을 통해
          방송부원들이 확인할 수 있게 됩니다. 해당 시스템을 통해 방송부원들은
          여러분께서 신청하신 곡들을 점심방송에 송출하게 됩니다. 하지만,
          방송부원의 판단으로 부적절한 노래나 신청 시 주의사항이 지켜지지 않은
          노래는 방송되지 않을 수 도 있습니다.
        </p>
      </div>
    </div>
  );
};

export default Faq;