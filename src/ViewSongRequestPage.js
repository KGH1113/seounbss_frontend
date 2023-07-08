import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Counter = () => {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    const getSongList = () => {
      fetch(
        "https://port-0-seounbss-backend-otjl2cli677tyd.sel4.cloudtype.app/view-request"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.length === 0) {
            // No requested songs
            setSongList(["아직 신청된 노래가 없습니다."]);
          } else {
            const songLabels = data.map(
              (song) => `${song.songTitle} - ${song.singer}`
            );
            setSongList(songLabels);
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
      getSongList();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  return (
    <div className="main">
      <Navbar selectedParam={3} />
      <div className="song-request">
        <p className="header">점심시간 노래 신청목록</p>
        <div className="containerrr">
          {songList.map((song, index) => (
            <p
              key={index}
              className="labell"
              onClick={() => {
                navigator.clipboard.writeText(song);
                Toast.fire({
                  icon: "success",
                  title: "복사되었습니다.",
                });
              }}
            >
              {song}
            </p>
          ))}
        </div>
        <div className="info-buttons">
          <a className="info-btn nav-btn" href="/song-request">
            신청하러 가기
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Counter;
