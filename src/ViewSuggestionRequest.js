import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ViewSuggestionRequest = () => {
  const [suggestionList, setSuggestionList] = useState([]);

  useEffect(() => {
    const getSuggestionList = () => {
      fetch(
        "https://port-0-seounbss-backend-otjl2cli677tyd.sel4.cloudtype.app/view-suggestion"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.length === 0) {
            // No requested suggestions
            setSuggestionList(["아직 신청된 건의사항이 없습니다."]);
          } else {
            const suggestions = data.filter(
              (suggestion) => suggestion.answer !== ""
            );
            const suggestionLabels = suggestions.map((suggestion) => ({
              question: suggestion.suggestion,
              answer: suggestion.answer,
            }));
            setSuggestionList(suggestionLabels);
          }
        })
        .catch((error) => {
          console.error(
            'An error occurred while requesting a HTTP to a server, Method: "GET". error code:',
            error
          );
        });
    };

    const handleLoad = () => {
      if (!navigator.onLine) {
        console.log("network error!");
        alert("네트워크 연결을 확인해 주세요!");
        return;
      }
      getSuggestionList();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <div className="main">
      <Navbar selectedParam={4} />
      <div className="song-request">
        <p className="header">건의사항 신청목록</p>
        <div className="containerrr">
          {suggestionList.map((suggestion, index) => (
            <div key={index} className="suggestion-label">
              <span className="labell">Q: {suggestion.question}</span>
              <br />
              <span className="labell">A: {suggestion.answer}</span>
              <br />
              <br />
              <br />
            </div>
          ))}
        </div>
        <div className="info-buttons">
          <a className="info-btn nav-btn" href="/suggestion-request">
            신청하러 가기
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewSuggestionRequest;
