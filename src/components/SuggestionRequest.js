const SuggestionRequest = () => {
  return (
    <div className="song-request">
      <p className="header">건의사항 신청하기</p>
      <div className="info-buttons">
        <a
          className="info-btn selected"
          href="/suggestion-request"
        >
          신청하기
        </a>
        <a
          className="info-btn nav-btn"
          href="/view-suggestion-request"
        >
          신청목록 보기
        </a>
      </div>
    </div>
  );
};

export default SuggestionRequest;