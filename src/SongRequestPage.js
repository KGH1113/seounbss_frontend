import React from "react";

import Swal from "sweetalert2";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

const SongRequestPage = () => {
  const handleSubmit = (event) => {
    if (!navigator.onLine) {
      console.log("network error!");
      alert("네트워크 연결을 확인해 주세요!");
      return;
    }

    event.preventDefault();

    const songTitle = document.getElementById("song-name").value;
    const singer = document.getElementById("artist").value;
    const name = document.getElementById("user-name").value;
    const studentNumber = document.getElementById("school-number").value;
    if (songTitle === "" || singer === "" || name === "" || studentNumber === "") {
      return;
    }
    // Create a request object
    const request = {
      name,
      studentNumber,
      songTitle,
      singer,
    };

    // Send the request to the server
    fetch(
      "https://port-0-seounbss-backend-otjl2cli677tyd.sel4.cloudtype.app/song-request",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      }
    )
      .then((response) => {
        if (response.ok) {
          // Request successful
          Swal.fire({
            icon: "success",
            title: "Thank you!",
            text: "노래가 신청되었습니다.",
          }).then(() => {
            window.location.reload(false);
          });
        } else {
          // Request failed
          response.json().then((data) => {
            Swal.fire("Error!", data.error, "error");
          });
        }
      })
      .catch((error) => {
        Swal.fire(
          "Info!",
          "An error occurred while making the request. ERROR:" + error,
          "info"
        );
        console.error(error);
      });
  };

  return (
    <div className="main">
      <Navbar selectedParam={3} mobileLogo={false} />
      <div className="song-request">
        <p className="header">점심시간 노래 신청하기</p>
        <div className="containerr">
          <p className="label">신청자 이름:</p>
          <input type="text" id="user-name" />
          <p className="label">학번:</p>
          <input type="text" id="school-number" />
          <p className="label">노래 제목:</p>
          <input type="text" id="song-name" />
          <p className="label">가수:</p>
          <input type="text" id="artist" />
        </div>
        <div className="info-buttons">
          <button className="info-btn selected" onClick={handleSubmit}>
            신청하기
          </button>
          <a className="info-btn nav-btn" href="/view-song-request">
            신청목록 보기
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SongRequestPage;
