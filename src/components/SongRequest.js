const SongRequest = () => {
  return (
    <div className="song-request">
      <p className="header">점심시간 노래 신청하기</p>
      <p className="info-text">신청 시 주의사항:</p>
      <div className="items-box">
        <div className="item-container">
          <div className="item">
            <i className="bx bx-check-shield"></i>
          </div>
          <p>건전한 노래만 신청해주세요.</p>
        </div>
        <div className="item-container">
          <div className="item">
            <i className="bx bx-wallet-alt"></i>
          </div>
          <p>일본노래, 이세계아이돌, 보컬로이드 등은 신청하지 말아주세요.</p>
        </div>
        <div className="item-container">
          <div className="item">
            <i className="bx bx-money"></i>
          </div>
          <p>본인이 직접 신청해주세요.</p>
        </div>
        <div className="item-container">
          <div className="item">
            <i className="bx bx-rocket"></i>
          </div>
          <p>중복된 가수의 노래 신청은 하지 말아주세요.</p>
        </div>
      </div>
      <div className="info-buttons">
        <a className="info-btn selected" href="/song-request">
          신청하기
        </a>
        <a className="info-btn nav-btn" href="/view-song-request">
          신청목록 보기
        </a>
      </div>
    </div>
  );
};

export default SongRequest;
